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
## (1) 페이지 간 이동과 데이터 구조 요약
- 주요 페이지(Home, Cart, Sub 등)와 세부 페이지를 Route로 구성
- Sub 페이지 안에서 Outlet을 통한 중첩 라우팅 적용 (shake, protein, bakery, event 등)
- :eventId, :category/:id 등 파라미터를 사용해 상세 페이지 구현
- App 컴포넌트에서 전체 페이지 공통 데이터(bests, sales, reviews, products)를 allData 객체로 묶어 하위 컴포넌트에 전달

```javascript

// App.js
function App() {
  const allData = {
  bests: bests,
  sales: sales,
  reviews: mainReviews,
  products: products,
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/sub/*' element={<Sub />}>
          <Route path='all' element={<SubAll />} />
          <Route path='shake' element={<SubShake />} />
          <Route path='protein' element={<SubProtein />} />
          <Route path='bakery' element={<SubBakery />} />
          <Route path='event' element={<SubEvent />}>
            <Route path='now' element={<NowEvent />} />
            <Route path='past' element={<PastEvent />} />
            <Route path=':eventId' element={<EventContent eventData={event} />} />
          </Route>
          <Route path='info/*' element={<SubBrandInfo />} />
        </Route>
        <Route
          path='/details/:category/:id'
          element={
            <Detail
              allData={allData}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
```
<br/

## (2) 세일 기한 Timer 구현
- 할인 문구와 <Timer> 컴포넌트를 렌더링, saleTime props로 종료 날짜 전달
- TimeCountdown 함수 활용하여 현재 시간과 종료 시간을 비교해 남은 시간 계산
- useState로 남은 시간 상태 관리, useEffect에서 1초마다 setInterval로 남은 시간 갱신하며 UI 업데이트

```javascript

// Pages > Home.js
  <div>
    <TitleDiv style={{marginBottom: '10px'}}>
      <p>최대 35% 할인 세트 상품 </p>
    </TitleDiv>
    <Timer className='timer' saleTime={"2025-12-31T23:59:59"} />
  </div>
```

```javascript

// Components > Timer.js
export default function Timer({ saleTime }) {

  const TimeCountdown = () => {

    const difference = new Date(saleTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(TimeCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(TimeCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, [saleTime]);

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
<br/><br/>

### 🔹 학습 포인트
- 사용자 흐름 최적화 및 중첩/동적 라우트 경험 확보
- 세일 타이머, 중첩 라우팅 등 실무 구현 경험
- 컴포넌트 효율적 상태 관리 학습
- 재사용성과 유지보수 효율 향상 경험
- 실제 프로젝트에서 구조적 안정성과 확장성 구현 경험
<br/><br/>

