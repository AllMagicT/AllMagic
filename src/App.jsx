const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#shows", label: "Program" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Review" },
  { href: "#contact", label: "Contact" },
];

const PROGRAMS = [
  {
    num: "01",
    title: "클로즈업 매직",
    desc: "테이블을 돌며 손 닿는 거리에서 보여 드리는 카드·동전 마술. 리셉션과 소규모 모임에 어울립니다.",
    meta: "20~40분 · 10~50명",
  },
  {
    num: "02",
    title: "스테이지 매직쇼",
    desc: "음악과 조명에 맞춘 무대 공연. 관객 참여 코너가 포함되어 기업 행사와 축제에 적합합니다.",
    meta: "30~60분 · 50~500명",
  },
  {
    num: "03",
    title: "키즈 · 가족 매직",
    desc: "아이들이 직접 마술사가 되어 보는 참여형 공연. 돌잔치, 생일 파티, 유치원 행사에 추천합니다.",
    meta: "30~40분 · 연령 맞춤 구성",
  },
];

const GALLERY = [
  { file: "photo-07.jpg", w: 1067, h: 1600, alt: "무대 조명 아래에서 흰 앵무새를 손에 올리고 두 팔을 벌린 마술사" },
  { file: "photo-06.jpg", w: 1600, h: 1067, alt: "무대에서 사람을 공중에 띄우는 공중 부양 마술" },
  { file: "photo-01.jpg", w: 1110, h: 1600, alt: "금색 용 자수가 놓인 검은 변검 의상을 입고 부채를 든 마술사" },
  { file: "photo-10.jpg", w: 1600, h: 1066, alt: "불꽃이 오르는 붉은 상자를 손에 들고 붉은 손수건을 든 마술사" },
  { file: "photo-05.jpg", w: 1067, h: 1600, alt: "무대 위에서 지폐가 흩날리는 가운데 두 팔을 들어 올린 마술사" },
  { file: "photo-12.jpg", w: 1600, h: 1066, alt: "날개를 편 흰 앵무새를 손에 올리고 지팡이를 든 마술사" },
  { file: "photo-03.jpg", w: 1067, h: 1600, alt: "손바닥 위에 투명한 수정 구슬을 띄워 보이는 마술사" },
  { file: "photo-08.jpg", w: 1600, h: 1066, alt: "화려한 관과 검은 망토의 변검 의상을 입은 마술사" },
  { file: "photo-11.jpg", w: 1066, h: 1600, alt: "마술 지팡이를 들고 모자 속 흰 토끼를 보여 주는 마술사" },
  { file: "photo-02.jpg", w: 1600, h: 1067, alt: "문어 모양 풍선 작품 두 개를 들고 환하게 웃는 마술사" },
  { file: "photo-09.jpg", w: 1600, h: 1066, alt: "변검 의상을 입고 용이 그려진 부채를 펼친 마술사" },
  { file: "photo-04.jpg", w: 1067, h: 1600, alt: "손가락 사이에 흰 공 네 개를 끼워 보이는 마술사" },
];

const REVIEWS = [
  { quote: "송년회 분위기가 완전히 달라졌어요. 직원들이 아직도 그 카드 마술 이야기를 합니다.", who: "기업 송년 행사 담당자" },
  { quote: "아이들이 40분 내내 눈을 떼지 못했어요. 무대에 올라간 딸이 제일 신났습니다.", who: "돌잔치 고객" },
  { quote: "하객들이 지루할 틈이 없었다고 하더라고요. 식전 공연으로 강력 추천합니다.", who: "결혼식 고객" },
];

export default function App() {
  return (
    <>
      <a className="skip" href="#main">본문으로 건너뛰기</a>

      <header>
        <div className="wrap">
          <a className="logo" href="#top">ALL MAGIC</a>
          <nav aria-label="주요 메뉴">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="hero" id="top">
          <div className="slide" />
          <div className="slide" />
          <div className="slide" />
          <div className="wrap">
            <h1>Magician Lee Dongwook</h1>
            <p>눈앞에서 벌어지는 믿을 수 없는 순간</p>
            <a className="btn" href="#contact">공연 섭외 문의</a>
          </div>
        </div>

        <section id="about">
          <div className="wrap">
            <h2 className="title">About <span>마술사 소개</span></h2>
            <div className="about">
              <img
                className="portrait"
                src="/image/web/photo-04.jpg"
                width="1067"
                height="1600"
                alt="검은 정장을 입고 손가락 사이에 흰 공 네 개를 끼워 보이는 마술사"
              />
              <div>
                <p>안녕하세요, 마술사 <strong>이동욱</strong>입니다. 10년 넘게 무대와 테이블을 오가며 관객 바로 앞에서 마술을 선보여 왔습니다.</p>
                <p>카드와 동전 같은 작은 소품부터 무대 일루전까지, 행사의 성격과 관객 연령에 맞춰 공연을 구성합니다. 보는 마술이 아니라 함께 참여하는 마술을 지향합니다.</p>
                <ul className="stats">
                  <li><strong>10년+</strong><span>공연 경력</span></li>
                  <li><strong>1,000회+</strong><span>누적 공연</span></li>
                  <li><strong>전국</strong><span>출장 가능</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="shows">
          <div className="wrap">
            <h2 className="title">Program <span>공연 프로그램</span></h2>
            <div className="cards">
              {PROGRAMS.map((p) => (
                <article className="card" key={p.num}>
                  <div className="num" aria-hidden="true">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <small>{p.meta}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="wrap">
            <h2 className="title">Gallery <span>무대와 스튜디오에서 담은 공연 장면</span></h2>
            <div className="gallery">
              {GALLERY.map((img) => (
                <img
                  key={img.file}
                  src={`/image/web/${img.file}`}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  alt={img.alt}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <h2 className="title">Review <span>관객 후기</span></h2>
            <div className="reviews">
              {REVIEWS.map((r) => (
                <blockquote key={r.who}>
                  <p>“{r.quote}”</p>
                  <footer>{r.who}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2 className="title">Contact <span>방송 · 공연 · 행사 · 광고 문의</span></h2>
            <p className="lead">행사 날짜, 장소, 예상 인원을 알려 주시면 맞춤 견적을 보내 드립니다.</p>
            <dl>
              <div><dt>Tel</dt><dd><a href="tel:010-5455-7324">010-5455-7324</a></dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:dongockgge15@gmail.com">dongockgge15@gmail.com</a></dd></div>
            </dl>
            <a className="btn" href="mailto:dongockgge15@gmail.com?subject=%EB%A7%88%EC%88%A0%20%EA%B3%B5%EC%97%B0%20%EC%84%AD%EC%99%B8%20%EB%AC%B8%EC%9D%98">이메일로 문의하기</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© 2026 All Magic. All rights reserved.</div>
      </footer>
    </>
  );
}
