"use client";
import {useEffect, useState} from 'react';
import Link from 'next/link';

const NavigationTab = () => {
    const [tabs, setTabs] = useState([
        {id: 1, label: 'Home', href: '/'},
    ]);
    const [isClient, setIsClient] = useState(false); // 클라이언트 렌더링 확인

    // 클라이언트 렌더링 활성화
    useEffect(() => {
        setIsClient(true); // 클라이언트에서만 true로 설정
    }, []);

    const addTab = (tab) => {
        if (!tabs.find((t) => t.href === tab.href)) {
            setTabs([...tabs, tab]);
        }
        // router 관련 작업도 클라이언트에서만 실행
        if (isClient) {
            const router = require('next/router').useRouter();
            router.push(tab.href);
        }
    };

    const removeTab = (tabId) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
        setTabs(updatedTabs);

        if (updatedTabs.length > 0 && isClient) {
            const router = require('next/router').useRouter();
            router.push(updatedTabs[updatedTabs.length - 1].href);
        } else if (isClient) {
            const router = require('next/router').useRouter();
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
                                isClient && require('next/router').useRouter().pathname === tab.href ? 'bg-white border' : 'bg-gray-200'
                            }`}
                        >
                            <Link id="link" href={tab.href} className="mr-2">
                                {tab.label}
                            </Link>
                            <button onClick={() => removeTab(tab.id)} className="text-red-500">
                                x
                            </button>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-4">
                    <p>현재 페이지: {isClient ? require('next/router').useRouter().pathname : 'Loading...'}</p>
                </div>
            </div>
        </div>
    );
};

export default NavigationTab;
