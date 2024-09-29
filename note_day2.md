# 리액트에서 Hook이란?

리액트에서 **Hook**은 함수형 컴포넌트에서 상태 관리나 생명주기 메서드 같은 기능을 사용할 수 있게 해주는 함수입니다. 원래 클래스형 컴포넌트에서만 가능했던 기능들을 함수형 컴포넌트에서도 사용 가능하도록 도와주는 것이죠.

## 대표적인 Hook 종류

### 1. useState
- 컴포넌트 내에서 상태를 관리할 수 있게 해주는 Hook.
- 호출하면 두 가지를 반환합니다: 상태 값과 그 상태를 업데이트할 함수.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 초기값 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### 2. useEffect
- 컴포넌트가 렌더링될 때, 업데이트될 때, 그리고 언마운트될 때 등 특정 시점에 실행되는 부수 효과를 처리할 수 있는 Hook.
- API 호출이나 DOM 조작, 타이머 설정 등에 자주 사용됨.

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval); // 언마운트 시 클리어
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행됨.

  return <div>Seconds: {seconds}</div>;
}
```

### 3. useContext

- React의 Context API와 함께 사용되어 컴포넌트 트리 전체에서 전역 상태를 쉽게 공유할 수 있게 해줍니다.

```jsx
javascript
코드 복사
const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>Button</button>;
}

```

## Hook의 규칙

- **반드시 함수 컴포넌트 또는 커스텀 Hook에서만 호출**해야 합니다.
- **조건문이나 반복문 안에서 Hook을 호출하면 안 됩니다.** 항상 컴포넌트 최상위에서 호출되어야만 합니다.

## 커스텀 Hook

- 여러 Hook을 조합해 자신만의 로직을 재사용할 수 있는 Hook을 만들 수 있습니다.

```jsx
javascript
코드 복사
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();
  return <div>Window width is: {width}</div>;
}

```

## 요약

Hook은 React에서 상태나 부수 효과를 관리하기 위해 사용하는 함수로, 함수형 컴포넌트의 기능성을 확장하는 중요한 역할을 합니다. `useState`, `useEffect`, `useContext` 같은 기본적인 Hook 외에도 커스텀 Hook을 만들어 로직을 재사용할 수 있습니다.



-------

## CSR vs SSR


CSR 



---

## 랜더링이란?
- ㅓㅏㅓㅣㅏ

---

## 'use client' 의 의미

https://nextjs.org/docs/app/building-your-application/rendering/client-components



## fetch
Next.js는 기본 웹 fetch() API를 확장하여 서버의 각 요청이 자체 영구 캐싱 의미를 설정할 수 있도록 합니다.
https://nextjs.org/docs/app/api-reference/functions/fetch

## Error Lens
VSCode에서 오류, 경고 및 기타 언어 진단을 강조하여 표시해주는 익스텐션
https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens


