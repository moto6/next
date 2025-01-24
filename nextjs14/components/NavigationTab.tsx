"use client";

import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function NavigationTab() {
    const [tabs, setTabs] = useState([
        { id: 1, label: 'Home', href: '/' },
    ]);
    const [isClient, setIsClient] = useState(false); // 클라이언트 렌더링 확인
    const router = useRouter();

    useEffect(() => {
        setIsClient(true); // 클라이언트 상태 활성화
    }, []);

    // 탭 추가 함수
    const addTab = (tab) => {
        if (!tabs.find((t) => t.href === tab.href)) {
            setTabs([...tabs, tab]);
        }
        router.push(tab.href);
    };

    // 탭 삭제 함수
    const removeTab = (tabId) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
        setTabs(updatedTabs);

        // 삭제 후 마지막 탭으로 이동
        if (updatedTabs.length > 0) {
            router.push(updatedTabs[updatedTabs.length - 1].href);
        } else {
            router.push('/');
        }
    };

    return (
        <div className="flex">
            {/* Left Navigation */}
            <div className="w-48 bg-gray-200 p-4">
                <button
                    onClick={() => addTab({id: 2, label: 'Dashboard', href: '/dashboard'})}
                    className="block mb-2"
                >
                    Dashboard
                </button>
                <button
                    onClick={() => addTab({id: 3, label: 'Settings', href: '/settings'})}
                    className="block mb-2"
                >
                    Settings
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
                {/* Tabs */}
                <div className="flex bg-gray-100 p-2 border-b">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`flex items-center px-4 py-2 ${
                                router.pathname === tab.href ? 'bg-white border' : 'bg-gray-200'
                            }`}
                        >
                            <Link href={tab.href}>
                                <a className="mr-2">{tab.label}</a>
                            </Link>
                            <button onClick={() => removeTab(tab.id)} className="text-red-500">
                                x
                            </button>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-4">
                    {/* 현재 페이지가 렌더링됨 */}
                    <p>현재 페이지: {router.pathname}</p>
                </div>
            </div>
        </div>
    );
};


