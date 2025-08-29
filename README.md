# BENOPE REACT APP 리뉴얼 프로젝트
편의성, 반응성, 재사용성, 유지보수 효율 강화를 위해 기존 웹 React App으로 재구성
<br/><br/>

### 🌐 프로젝트 소개
간편 대체식 판매 기업 ‘Benope’의 웹사이트를 React로 재구성하여 사용자와 관리자의 편의성을 높이며,  
반응성, 재사용성, 유지보수 효율 강화하는 동시에 간편식 중심의 식사 트렌드와 최신 웹사이트 트렌드를 반영한 React 기반 웹사이트입니다.
<br/><br/>

### 📅 기획/개발 기간
- 25.07.29. ~ 25.08.08.  
- 기획·디자인 1주 / 개발 1주
<br/><br/>

### 🛠️ 코드 리뷰
(1) 페이지 간 이동을 위한 라우팅 구조와 중첩/동적 라우트 설계
- 주요 페이지(Home, Cart, Sub 등)와 세부 페이지를 라우트로 구성
- Sub 페이지 안에서 Outlet을 통한 중첩 라우팅 적용 (shake, protein, bakery, event 등)
- :eventId, :category/:id 등 동적 라우트 파라미터를 활용하여 디테일 페이지 구현

```javascript
// App.js
function App() {

  // 전체 페이지에서 공통으로 사용할 데이터 묶음
  const allData = {
  bests: bests,
  sales: sales,
  reviews: mainReviews,
  products: products,
  };

  return (
    <div className="App">

      {/* 공통 헤더 */}
      <Header />

      {/* 라우팅 설정 */}
      <Routes>
        {/* 메인 페이지 */}
        <Route path='/' element={<Home />} />
        {/* 장바구니 페이지 */}
        <Route path='cart' element={<Cart />} />
        {/* 서브 메뉴 */}
        <Route path='/sub/*' element={<Sub />}>
          <Route path='all' element={<SubAll />} />
          <Route path='shake' element={<SubShake />} />
          <Route path='protein' element={<SubProtein />} />
          <Route path='bakery' element={<SubBakery />} />
          {/* 서브 이벤트 카테고리(중첩 라우팅) */}
          <Route path='event' element={<SubEvent />}>
            <Route path='now' element={<NowEvent />} />
            <Route path='past' element={<PastEvent />} />
            <Route path=':eventId' element={<EventContent eventData={event} />} />
          </Route>
          <Route path='info/*' element={<SubBrandInfo />} />
        </Route>

        {/* 상세 페이지 (카테고리 + id 기반) */}
        <Route
          path='/details/:category/:id'
          element={
            <Detail
              allData={allData}
            />
          }
        />
      </Routes>

      {/* 공통 푸터 */}
      <Footer />
    </div>
  );
}
```
<br/><br/>

(2) Home Component에 세일 기한 Timer 구현
- 세일 종료 시점 계산 및 실시간 남은 시간 표시
- useEffect와 setInterval을 활용한 타이머 구현

```javascript

// Pages > Home.js
  <div>
    <TitleDiv style={{marginBottom: '10px'}}>
      <p>최대 35% 할인 세트 상품 </p>
    </TitleDiv>
    <Timer className='timer' saleTime={"2025-12-31T23:59:59"} />
    {/* saleTime={"세일 마감 기한"} */}

  </div>
```

```javascript

// Components > Timer.js

export default function Timer({ saleTime }) { // props로 saleTime(세일 종료 시간)을 받음

  // ✔ 타이머 함수 생성
  const TimeCountdown = () => {

    // 세일 종료 시각 - 현재 시각 = 남은 시간(밀리초 단위)
    const difference = new Date(saleTime) - new Date();
    let timeLeft = {};

    if (difference > 0) { // 종료 전이라면,
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), // 일(day) 계산
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // 시(hour) 계산
        minutes: Math.floor((difference / (1000 * 60)) % 60), // 분(minunte) 계산
        seconds: Math.floor((difference / 1000) % 60), // 초(second) 계산
      };
    }
    return timeLeft; // 남은 시간을 객체로 반환
  };

  // 남은 시간 관리
  const [timeLeft, setTimeLeft] = useState(TimeCountdown());

  // 1초마다 남은 시간 갱신
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(TimeCountdown());
    }, 1000);

    // interval 정리
    return () => clearInterval(timer);
  }, [saleTime]);

  // 남은 시간이 있으면 카운트다운, 없으면 기간 종료 메시지 출력
  return (
    <TimerBox>
      {timeLeft.days !== undefined ? (
        <p>
          {timeLeft.days}일 {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')} 남음
        </p>
      ) : (
        <p>기간이 종료되었습니다.</p>
      )}
    </TimerBox>
  )
}
```
![Image](https://github.com/user-attachments/assets/025bba2c-d294-49da-b9dd-61ed64012a92)
<br/><br/>

### 🔍 코드 리뷰 요약
- React Router를 활용하여 메인, 서브, 상세 페이지 간 원활한 이동 구현
- Home Component에 세일 기한 Timer를 적용하여 실시간 카운트다운 표시 및 종료 메시지 처리
- useEffect와 setInterval을 사용한 실시간 데이터 갱신 및 메모리 관리 경험 확보
<br><br/>

### 🔹 학습 포인트
- 사용자 흐름 최적화 및 중첩/동적 라우트 경험 확보
- 세일 타이머, 중첩 라우팅 등 실무 구현 경험
- 컴포넌트 효율적 상태 관리 학습
- 재사용성과 유지보수 효율 향상 경험
- 실제 프로젝트에서 구조적 안정성과 확장성 구현 경험
<br/><br/>

