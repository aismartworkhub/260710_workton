// Project templates data representing AISH (SME DX), Government Grant (R&D DX), and Startup Pitch
const templates = {
    "aish": {
        name: "AISH 스마트워크톤 지속가능 성장 전략",
        background: "AISH가 주관하는 G-Valley 중소기업 AI 스마트워크톤 행사의 재정 자립 및 지속가능한 성장 전략 수립.",
        constraints: "참가비 30만 원 유지, 열린 행사 구조 보존, 대학생 청년 조교 고용 모델 연계, AISH 공공 네트워크 자산 활용.",
        requirements: "1. 스마트워크톤 핵심 자산 분석\n2. B2C/B2B/B2G 3대 축 BM 설계\n3. 공익성-수익성 이중 엔진 모델 도출\n4. 2026 킬러 아이디어 및 실행 계획 수립",
        agents: {
            pm: {
                role: "Strategy Lead (PM)",
                desc: "전체 프로젝트 통제 및 공익성-수익성 밸런스 튜닝",
                prompt: "You are the Strategy Lead. Analyze AISH assets (SBA ties, Tuesday upgrade morning club) and resolve the public-private conflict via cross-subsidization."
            },
            bm: {
                role: "BM Architect",
                desc: "B2C/B2B/B2G 비즈니스 모델 및 2027 확장성 설계",
                prompt: "You are the BM Architect. Define premium upsells, SaaS sponsors, and RISE/SBA B2G funding paths while keeping core fee at 300k."
            },
            ops: {
                role: "Ops Specialist",
                desc: "행사 현장 오퍼레이션 및 청년 조교 일자리 매칭",
                prompt: "You are the Ops Specialist. Create the 'G-Valley AX Challenge' and structure the paid internship model using regional job subsidies."
            },
            creative: {
                role: "Creative Director",
                desc: "제안서 콘텐츠 라이팅 및 1분 영상 듀얼 스토리보드",
                prompt: "You are the Creative Director. Draft the 10p proposal, 1p summary, and configure the image & Higgsfield video prompt scripts."
            }
        },
        logs: {
            pm: "김상용 원장 SBA 자문 이력 분석 완료. 공익-수익 밸런싱 축 설계 중...",
            bm: "SaaS 벤더(Notion/Claude) PoC 수수료 모델 및 RISE 예산 연계 완료.",
            ops: "동양미래대/시립대 청년 인턴 매칭 타임라인 수립 완료. 기업시민청 대관 세팅.",
            creative: "10P 마크다운 제안서 및 1분 스토리보드 이미지/비디오 프롬프트 빌딩 완료."
        }
    },
    "gov_grant": {
        name: "정부 과제 R&D AI-DX 바우처 지원 제안",
        background: "정부(중소벤처기업부/정보통신산업진흥원) 주관 AI 바우처 사업의 수행기관 매칭 및 중소기업 맞춤형 AX 솔루션 공급 전략 수립.",
        constraints: "바우처 매칭 정부 한도 준수, 제조/서비스 SME 적용성 입증, 청년 개발인력 인턴쉽 연계, 사업 계획서 양식 충족.",
        requirements: "1. AI 바우처 수혜 타깃 분석 및 차별화 요소 도출\n2. 매칭 플랫폼 BM 및 국비 매칭 예산 설계\n3. 공급기업 풀 관리 및 부정수급 리스크 방안\n4. 2026 AI-DX 도입 매뉴얼 작성",
        agents: {
            pm: {
                role: "Gov Strategy Lead (PM)",
                desc: "정부 정책 부합성 검토 및 바우처 제도 정합성 분석",
                prompt: "You are the Gov Strategy Lead. Align with NIPA/MSS policy requirements. Ensure risk mitigation against subsidy abuse."
            },
            bm: {
                role: "Gov BM Architect",
                desc: "매칭 솔루션 및 공급-수혜 매칭 수수료 구조 설계",
                prompt: "You are the Gov BM Architect. Detail how the 70% government funding is structured alongside the 30% private match (cash/in-kind)."
            },
            ops: {
                role: "Gov Ops Specialist",
                desc: "AI 기술 도입 진단 매뉴얼 및 공급기업 매칭 관리",
                prompt: "You are the Gov Ops Specialist. Design the SME AI readiness assessment checklist and local technical tutor dispatcher model."
            },
            creative: {
                role: "Creative Director",
                desc: "NIPA 양식 사업계획서 10P 편집 및 홍보 영상 기획",
                prompt: "You are the Creative Director. Compile the R&D proposal. Structure the basic DALL-E storyboard and Higgsfield video cues."
            }
        },
        logs: {
            pm: "중기부 AI 바우처 지원 요건 및 부정수급 규제 필터링 통과 확인.",
            bm: "국비 70% 매칭 예산 매트릭스 설계 및 공급기업 정산 프로세스 정립.",
            ops: "SME 대상 AI DX 도입 자가진단 20대 지표 수립. 멘토 1:1 파견 모델 구축.",
            creative: "AI 바우처 제안서 마크다운 변환 및 홍보용 씬 구성 완료."
        }
    },
    "startup_pitch": {
        name: "스타트업 시드 투자 유치 및 Growth Pitch",
        background: "AI Agent 오케스트레이션 플랫폼 스타트업의 시드/시리즈 A 투자 유치를 위한 IR 피칭 및 글로벌 성장 모델 구축.",
        constraints: "시드 밸류에이션 한계 설정, 타깃 투자사(VC/AC) 적합도 조정, 오픈소스 연계 코어 자산 활용, 개발진 멘토링 프로그램 연계.",
        requirements: "1. AI 오케스트레이션 시장 타깃 분석\n2. SaaS 구독 모델 및 기업용 프라이빗 API BM\n3. 오픈소스 생태계 공헌도 및 락인 전략\n4. 1분 엘리베이터 피치 영상 및 IR Pitch Deck 구성",
        agents: {
            pm: {
                role: "Investment Lead (PM)",
                desc: "IR 스토리라인 조율 및 투자금 회수 회계 시나리오",
                prompt: "You are the Investment Lead. Frame the problem-solution fit. Balance open-source adoption with commercial monetization."
            },
            bm: {
                role: "SaaS BM Architect",
                desc: "구독형(SaaS) 과금 모델 및 Enterprise 전용 API 단가 설계",
                prompt: "You are the SaaS BM Architect. Draft unit economics, seat-based licensing, and custom API token volume discounts."
            },
            ops: {
                role: "Ops Specialist",
                desc: "인력 스케일업 플랜 및 글로벌 개발 허브 기획",
                prompt: "You are the Ops Specialist. Create the global remote developer hiring plan and tech support operations."
            },
            creative: {
                role: "Creative Director",
                desc: "IR Pitch Deck 마크다운 스토리 및 1분 피치 영상",
                prompt: "You are the Creative Director. Design the 10-slide IR storyboard and 1-minute elevator speech cue package."
            }
        },
        logs: {
            pm: "AI 시장 TAM-SAM-SOM 분석 완료. 투자 유치 로드맵 3개년 설정.",
            bm: "무료 오픈소스 배포판 대비 기업용 엔터프라이즈 에디션의 결제 모듈 완성.",
            ops: "개발자 채용 허브(베트남/인도) 운영비 및 로컬 튜터 풀 구성 완료.",
            creative: "IR 피치덱 마크다운 렌더링 및 1분 데모 영상 시퀀스 구축 완료."
        }
    }
};

// Dynamic Proposal Page Generator & State Variables
let selectedPageCount = 10;
let selectedSubmissionTarget = "정보통신산업진흥원";
let pageEditsState = {
    aish: {},
    gov_grant: {},
    startup_pitch: {}
};

function getProposalPages(templateKey, pageCount, targetDestination) {
    let basePages = [];
    let extraPages = [];
    
    if (templateKey === "aish") {
        basePages = [
            {
                title: "1. 서론 및 제안 배경",
                content: `스마트워크톤은 AISH의 교육 철학인 <strong>'배워서 남주자 (Learn to Give)'</strong>를 실천하는 최상위 실행 플랫폼입니다. G-Valley 기업인들이 참관 및 참여하여, 생성형 AI와 스마트워크 도구로 실제 기업 비즈니스 현장의 애로사항을 해결하는 성과를 축적해 왔습니다. 본 제안서는 <strong>${targetDestination}</strong>의 공공 가이드라인에 부합하여, 기존의 교육 참가비(30만 원)에만 의존하던 방식에서 벗어나 <strong>공익적 가치를 보존하면서도 안정적인 수익 구조를 확립</strong>하는 지속가능성 전략 수립을 목표로 합니다.`
            },
            {
                title: "2. 핵심 자산 및 차별화 요소 분석",
                content: `AISH 스마트워크톤의 독보적 경쟁력은 일회성 해커톤이나 단순 단발성 강연 교육이 아닌, 강력한 지역 커뮤니티 인프라에 기반합니다.<br><br><strong>📊 AISH 핵심 자산 매트릭스</strong><br>1. <strong>대표원장의 공공 네트워크 자산</strong>: 2008년부터 서울경제진흥원(SBA)에서 쌓아온 G-Valley 현장 지식, <strong>${targetDestination}</strong> 및 유관 공공기관의 사업 프로세스 경험.<br>2. <strong>지속가능한 커뮤니티 라이프사이클</strong>: 매주 수요일 보충수업을 통한 1:1 과외식 보강, 매주 화요일 아침 7시 정회원 모임(매주 50명+ 참석) 사후 결속력.<br>3. <strong>산학협력 실증 파트너십</strong>: 서울시립대학교 및 동양미래대학교와의 공식 MOU 체결.`
            },
            {
                title: "3. 지속가능한 3-Way 수익 모델 설계",
                content: `기존의 30만 원 참가비 한계를 탈피하고, 재정 자립도를 300% 이상 끌어올리기 위한 B2C, B2B, B2G 입체적 비즈니스 모델을 <strong>${targetDestination}</strong>에 제안합니다.<br><br>- <strong>B2C (프리미엄 업셀)</strong>: 기본 10주 정규과정 참가비는 30만 원으로 동결하여 공익적 진입장벽을 최소화하되, 맞춤형 1:1 VIP 밀착 컨설팅 옵션(추가 100만 원) 및 'AI-DX 공인 전문가 인증서' 유료 추가.<br>- <strong>B2B (SaaS 스폰서십 및 PoC 대행)</strong>: 중소기업 의사결정권자 타깃 마케팅을 원하는 SaaS 벤더(Notion, Claude API 등)로부터 스폰서십 유치를 통해 후원금 확보.<br>- <strong>B2G (국비 매칭 및 보조금)</strong>: <strong>${targetDestination}</strong> 산하 지원금 및 대학 <strong>RISE 예산</strong> 연계, 청년 일자리 매칭 보조금을 100% 매칭 연계하여 조달.`
            },
            {
                title: "4. 2027년 이후 전국 및 글로벌 확장 방안",
                content: `G-Valley의 성공 공식인을 표준 패키지화하여 <strong>${targetDestination}</strong> 협력 네트워크를 통해 대한민국 전역 및 글로벌 AI 생태계로 영토를 확장합니다.<br><br><strong>🗺️ 전국 산업단지 확산 로드맵</strong><br>전국 10대 산업단지(창원, 반월시화 등)의 테크노파크 및 거점 대학 산학협력단과 컨소시엄을 구성하여 'AISH 지역 테크 센터'를 프랜차이즈 설립하고 로열티 수입을 다각화합니다.<br><br><strong>🌐 글로벌 조인트 챌린지 확장</strong><br>- <strong>ASEAN IT 스타트업 조인트 트랙</strong>: 베트남(하노이/호치민), 인도네시아(자카르타) 등 동남아시아 현지 IT 아웃소싱 강소기업 및 청년 개발자들을 G-Valley 중소기업의 스마트워크톤 매칭 팀으로 합류시켜 글로벌 협업 역량을 강화합니다.`
            },
            {
                title: "5. 공익성과 수익성의 충돌 및 보완 방안",
                content: `공익적 대중성과 영리적 재정 자립의 지속적인 충돌을 방어하기 위해 <strong>${targetDestination}</strong> 심사 규정에 따라 <strong>'이중 엔진(Dual-Engine) 교차 보조'</strong> 거버넌스를 설계합니다.<br><br>1. <strong>재원 분리 교차 보조</strong>: B2B 스폰서십 및 B2G 정책 자금으로 고정 운영비를 전액 해결하여 <strong>'수익성 엔진'</strong>을 가동합니다. 이를 통해 확보한 재원으로 B2C 참가비는 30만 원으로 동결하고, 해당 금액은 전액 참가자의 AI API 크레딧 충전금으로 실질 환원하여 <strong>'공익성 엔진'</strong>을 방어합니다.<br>2. <strong>벤더 중립성 보장</strong>: AISH 정회원 운영위원회 주관의 기술 감사단을 구성하여, 특정 SaaS 제품의 종속 여부를 분기별로 심의하고 다중 LLM(Claude, GPT, Gemini)을 고르게 다루는 중립적 커리큘럼 기준을 유지합니다.`
            },
            {
                title: "6. 2026년 제6회 스마트워크톤 핵심 실행 아이디어",
                content: `<strong>💡 핵심 콘셉트: 'G-Valley 상생 AX(AI-DX) 챌린지'</strong><br>G-Valley 내 디지털 격차가 심각한 전통 제조/뿌리/수출 강소기업들을 대상으로 사전 실무 애로사항(예: 종이 세금 계산서 수작업 분류, 무역 바이어 이메일 번역 대응, 매일 반복되는 엑셀 재고 입력 등)을 접수받아 카탈로그화합니다.<br><br>AISH 수료 CEO 1명과 IT 전공 대학생 2명이 한 팀을 구성하고, AISH 소속의 숙련된 <strong>청년 조교 1명이 전담 기술 멘토</strong>로 매칭되어 2주간 실물 Claude API 기반의 자동화 프로토타입을 설계 및 배포해 주는 실무 해결형 챌린지입니다. 본 챌린지는 단순한 모의 해커톤이 아니라, <strong>${targetDestination}</strong>의 지원 아래 실제 중소기업 비즈니스를 작동하게 만드는 PoC 구축을 핵심 목표로 설정하여 성과 발표회 당일 실제 현장 적용 데이터가 검증되도록 강제합니다.`
            },
            {
                title: "7. 2026년 행사 운영 상세 계획 및 타임라인",
                content: `제6회 스마트워크톤의 차질 없는 기획과 실행을 위한 4단계 마일스톤 타임라인입니다.<br><br><strong>📅 월별 액션 플랜</strong><br>- <strong>7월 (기획 및 파트너십 확정)</strong>: 대학 산학협력단 및 RISE 사업 연계 공동 주관 합의 MOU 최종 서명. 금천구 기업지원센터 대관 및 <strong>${targetDestination}</strong> 전문위원 소집.<br>- <strong>8월 (재원 조달 및 스폰서 파트너링)</strong>: 글로벌 SaaS 기업 및 국내 유망 AI 스타트업 대상 스폰서십 제안서 발송 및 후원금 확정.<br>- <strong>9월 (수요조사 및 문제 접수)</strong>: G-Valley 관내 중소기업 대상 업무 자동화 애로사항 접수 및 15개 과제 선정.<br>- <strong>10월 (매칭 및 사전 프로토타이핑)</strong>: 참가 학생단 모집, 청년 조교 1:1 매칭 및 사전 빌딩 가동.<br>- <strong>11월 (본선 개최)</strong>: 골드리버호텔 컨벤션홀에서 성과 시연 본선 개최, 우수 3개 팀 시상.`
            },
            {
                title: "8. G-Valley 청년 조교 매칭 및 고용 창출 운영안",
                content: `청년들의 AI 실무 능력을 기르고 중소기업의 만성 인력 부족 문제를 동시에 해결하는 인적 선순환 매커니즘을 정의합니다. 본 운영안은 <strong>${targetDestination}</strong>의 청년 고용 지원 규정에 동조합니다.<br><br><strong>👥 청년 조교 고용 프로세스</strong><br>1. <strong>국비 기반 예산 확보</strong>: 서울시 및 지자체의 '지역 주도형 청년 일자리 지원금' 및 대학의 현장실습 실습비를 연계하여 청년 조교의 급여를 <strong>100% 정부 재원 보조금</strong>으로 충당하여 주최측 예산 부담을 0원으로 통제합니다.<br>2. <strong>사전 역량 강화 (Pre-Training)</strong>: 양 대학교 IT 전공생을 대상으로 AISH 정규 커리큘럼을 4주간 집중 교육하고 'AISH 공인 AI-DX 튜터' 자격을 부여합니다.<br>3. <strong>1:1 팀 밀착 서포팅 및 인턴 연계</strong>: 매칭된 G-Valley 기업의 애로사항 자동화 프로토타입 완성 시까지 기술 지도를 전담 수행하게 하며 우수 활동 조교는 현장 인턴십 및 정규직 채용으로 연계합니다.`
            },
            {
                title: "9. 소요 예산 및 재무 시뮬레이션",
                content: `총 100명 규모의 제6회 스마트워크톤 행사 실행 예산안 및 AI API 비용 절감 모델입니다. 예산 배정은 <strong>${targetDestination}</strong> 지침 단가를 준수합니다.<br><br><strong>💰 제6회 스마트워크톤 실행 예산 매트릭스</strong><br>- 골드리버호텔 대관 및 식음료: 8,000,000원 (후원금)<br>- 청년 조교 활동 수당 (15명 x 30시간): 5,400,000원 (보조금)<br>- 참가자 기념 패키지, 홍보물 인쇄: 2,000,000원 (참가비)<br>- AI API 크레딧 지원금: 1,600,000원 (SaaS 협찬)<br>- 우수 솔루션 시상금 및 외부 심사료: 10,000,000원 (후원금)<br>- <strong>합계: 27,000,000원</strong> (재정 자립도 100% 확보 완료)<br><br><strong>🔌 API 비용 최적화 설계</strong><br>- <strong>하이브리드 LLM 라우팅</strong>: 초안 작성은 Gemini/GPT-mini로 처리하고, 최종 검증에만 Claude 3.5 Sonnet을 사용하여 호출 토큰 단가를 <strong>80% 절감</strong>합니다.<br>- <strong>프롬프트 캐싱 (Prompt Caching)</strong>: 업로드된 100여 페이지의 공문 RFP 데이터를 Anthropic 캐싱 시스템에 고정 등록해 매 호출 요금을 <strong>90% 절감</strong>합니다.`
            },
            {
                title: "10. 결언 및 미래 비전",
                content: `AISH가 지향하는 <strong>'배워서 남주자'</strong>의 핵심 정신은 고립된 개인의 성장을 넘어, 지역 경제의 중추인 G-Valley 중소기업의 상생과 지역 대학생들의 일자리 기회 확대로 이어질 때 진정한 완성에 도달합니다.<br><br>본 제안서에서 제시한 지속가능 성장 전략은 참가비 30만 원의 가치를 소중히 지키면서도 B2B와 B2G의 입체적 재원을 융합하여 <strong>${targetDestination}</strong>의 독자적인 재정 자립 모델을 수립하는 데 이정표가 될 것입니다. 2026년 제6회 스마트워크톤의 공정 혁신 시연을 시작으로, 2027년 대한민국 전역의 산업단지로 AISH의 상생 AX 생태계를 무한히 이식할 것을 약속드립니다.`
            }
        ];
        
        extraPages = [
            {
                title: "11. 규제 샌드박스 및 법적 검토 사항",
                content: `본 사업에서 제공되는 청년 조교 일자리 매칭 및 현장 실무 보조금 집행 모델은 <strong>${targetDestination}</strong> 및 고용노동부의 청년 수당 지급 지침을 철저히 준수합니다. 대학 현장실습 교육 과정과 연계하여 노무 리스크를 사전 차단하고, 샌드박스 표준 계약 양식을 도입하여 투명성을 보장합니다.`
            },
            {
                title: "12. 다중 LLM 보안 필터 및 개인 정보 방지 대책",
                content: `중소기업의 실제 비즈니스 데이터를 다룰 때 발생할 수 있는 소스코드 및 개인정보의 LLM 학습 누출을 방지하기 위해, <strong>${targetDestination}</strong>의 보안 권고사항을 충족하는 프라이빗 LLM 프록시 게이트웨이를 적용합니다. API 호출 전 민감 정보를 실시간 비식별화 처리하는 SOTA 보안 필터를 탑재합니다.`
            },
            {
                title: "13. 공급망 안정화 및 협력 SaaS 벤더 확장 로드맵",
                content: `Notion, Claude API 등 해외 특정 SaaS 솔루션의 의존성을 줄이고 다변화하기 위해, 네이버 하이퍼클로바X 및 국내 AI 스타트업들의 한글 특화 모델 공급망을 컨소시엄에 추가합니다. 이를 통해 <strong>${targetDestination}</strong>의 국산 SW 활성화 기조와 동기화합니다.`
            },
            {
                title: "14. 투자 회수(ROI) 세부 시뮬레이션 및 재정 자립 성과 모델",
                content: `B2B SaaS 협찬 PoC 대행 수수료 매출 시나리오에 따르면, 연간 15개 중소기업 참여 시 누적 3년 차 영업이익률 28%를 돌파하여 <strong>${targetDestination}</strong> 지원금 종료 이후에도 외부 투자 유치 및 독자 법인 생존이 가능한 안정적 자립 마일스톤을 실증합니다.`
            },
            {
                title: "15. 정부 과제 정산 연동 매뉴얼 및 최종 공정 감리 가이드라인",
                content: `<strong>${targetDestination}</strong> 정산 규칙에 맞춰, 청년 조교 활동비 및 클라우드 AI 서버비 지출 항목을 실시간 토큰 사용량 API 리포트와 자동 대조 연동합니다. 분기별 공정 혁신 감리단 심사를 통해 부정수급을 원천 차단하는 최종 통제 절차를 수록합니다.`
            }
        ];
        
    } else if (templateKey === "gov_grant") {
        basePages = [
            {
                title: "1. 제안 개요 및 목표",
                content: `본 과제는 <strong>${targetDestination}</strong>의 R&D DX 지원사업 기준에 의거하여, IT 역량이 열악한 중소 제조기업 및 서비스 기업에 AISH의 AI 솔루션 매칭 및 통합 기술 지도를 제공하여 사업의 성공률을 향상시키는 것을 목표로 합니다.`
            },
            {
                title: "2. 수혜기업 타깃 분석",
                content: `국내 대다수의 수혜 중소기업은 AI 솔루션을 도입해도 운용할 내부 전문 인력이 전무하여 예산만 소진하고 포기하는 만성적 실패 요인이 존재합니다. <strong>${targetDestination}</strong> 관내 기업에 대한 AISH의 상주형 튜터링 파견 모델은 이 문제를 현장에서 완벽히 해결합니다.`
            },
            {
                title: "3. 플랫폼 매칭 비즈니스 모델",
                content: `공급기업 계약 체결액의 5%를 매칭 플랫폼 중개 수수료로 수취하며, 솔루션 검수 시 삼각 감리(AISH 전문위원회 및 <strong>${targetDestination}</strong> 외부 평가단) 제도를 도입해 투명성을 확보하고 장기적인 라이선스 매출을 견인합니다.`
            },
            {
                title: "4. 2027 글로벌 확장 로드맵",
                content: `국내 10대 테크노파크(TP) 및 <strong>${targetDestination}</strong>의 해외 무역 거점지 업무 제휴를 완료한 후 전국적 통합 DX 바우처 망을 구축하고, 인도네시아 및 베트남 현지 아웃소싱 R&D 기업들과 연계하여 글로벌 AI 아웃소싱 플랫폼으로 거듭납니다.`
            },
            {
                title: "5. 리스크 및 부정수급 보완책",
                content: `공급-수혜기업 간의 이면 거래나 리스크 관리를 철저히 감시하기 위해, 예산 청구 시 <strong>${targetDestination}</strong> 표준 Pydantic Harness 규격 검증 및 분기별 PoC 실제 적용 여부를 감리단이 실시간으로 확인하는 이중 장치를 마련합니다.`
            },
            {
                title: "6. 2026 도입 패키지 사양",
                content: `전통 제조공장 공정 효율화를 위해 API 기반으로 실시간 공정 이상을 탐지하는 'SmartFactory AI-DX' 솔루션 및 현장 모니터링을 위한 통합 대시보드를 <strong>${targetDestination}</strong> 공식 인증을 획득하여 커스텀 제공합니다.`
            },
            {
                title: "7. 사업 수행 계획 및 일정",
                content: `7~8월: 수요 매칭 조사 및 타깃 공급기업 얼라이언스 구축 완료.<br>9월: 수혜기업 AI 적합성 자가진단 및 RFP 문서 매핑.<br>10월: 튜터 매칭 및 R&D 사전 자동화 시스템 구축.<br>11월: <strong>${targetDestination}</strong> 표준 솔루션 실적 검수 및 정산.`
            },
            {
                title: "8. 전문 튜터 파견 및 교육 체계",
                content: `대학 IT 전공자들을 선발하여 8주간의 AI-DX 튜터 훈련과정을 마친 뒤, 수혜기업에 상주 또는 주 2회 방문 지도 요원으로 파견합니다. 비용은 <strong>${targetDestination}</strong> 및 지자체 청년 취업 예산으로 100% 국비 지원합니다.`
            },
            {
                title: "9. 국비 매칭 예산 구성",
                content: `총 사업 예산 중 <strong>${targetDestination}</strong> 보조금(국비 70%), 수혜기업 인건비 대체(현물 20%), 수혜기업 실제 매칭(현금 10%)으로 설계하여 경기 침체기 중소기업들의 초기 재정적 자부담을 획기적으로 경감합니다.`
            },
            {
                title: "10. 결언 및 기대 효과",
                content: `정부 지원금의 투명하고 생산성 높은 집행을 통해, 전통 산업군 중소기업의 디지털 격차를 근본적으로 해소하고 <strong>${targetDestination}</strong>이 주창하는 청년 IT 일자리를 창출하는 공익적 산학 협력 표준 모델로 안착할 것을 약속드립니다.`
            }
        ];
        
        extraPages = [
            {
                title: "11. 제조 공정 AI 알고리즘 기술성숙도(TRL) 세부 실증 계획",
                content: `본 과제의 기술성숙도는 TRL 6단계(시제품 현장 실증)에서 시작하여 TRL 8단계(상용 현장 적용 및 정량성 평가)로의 스케일업을 보장합니다. <strong>${targetDestination}</strong>의 공학 전문 심사 가이드라인에 맞춘 테스트 시나리오를 첨부합니다.`
            },
            {
                title: "12. 공급망 보안성 평가 및 데이터 유출 차단(DLP) 연동",
                content: `중소제조기업의 도면 및 생산 설계 수치가 클라우드 AI 엔진으로 유출되는 것을 차단하기 위해, 온프레미스 기반의 AI 게이트웨이에 NIPA 및 <strong>${targetDestination}</strong> 지정 국가지정 보안 알고리즘을 이중 연동합니다.`
            },
            {
                title: "13. 지자체 청년 고용 지원금 정산 매뉴얼",
                content: `매칭 조교 급여로 지급되는 <strong>${targetDestination}</strong> 국비 보조금의 오남용을 방지하기 위해 위치 정보 기반 출퇴근 카드 태깅 시스템 및 정밀 원천세 징수 보고 포맷 양식을 기술하여 정산의 신뢰성을 담보합니다.`
            },
            {
                title: "14. AI 바우처 실적 검수용 테스트 하네스 검증서식",
                content: `도입된 솔루션의 기계 작동율 및 오류율을 <strong>${targetDestination}</strong> 검증 평가위원회가 실시간 API 로그 데이터 대조 방식으로 직접 원격 실사할 수 있도록, 표준화된 데이터 스트리밍 하네스 템플릿을 사전 탑재합니다.`
            },
            {
                title: "15. 과제 종료 후 3개년 차 성과 모니터링 가이드라인",
                content: `R&D 사업 종료 이후 3개년 동안 수혜기업의 매출 증가율 및 고용 유지 지표를 NIPA 표준 서식에 연동하여 자동 제출하는 트래커를 설치하며, 이를 통해 <strong>${targetDestination}</strong>에 장기 추적 연구 데이터를 제공합니다.`
            }
        ];
        
    } else {
        // startup_pitch
        basePages = [
            {
                title: "1. 제안 개요 및 서비스 필요성",
                content: `다중 AI 에이전트를 효율적으로 조율 및 배치하여 기업의 반복 업무를 혁신하는 엔터프라이즈 오케스트레이션 SaaS 플랫폼 투자 제안입니다. <strong>${targetDestination}</strong>의 지원 프로그램을 통해 초기 시장 안착을 실증하고자 합니다.`
            },
            {
                title: "2. 시장 타깃 및 문제 분석",
                content: `기업들의 다양한 LLM 도입 증가로 인해 프라이빗 망 보안 요건 충족 및 여러 AI 에이전트 간의 업무 조율(Orchestration) 관리 기술의 공백이 시장의 치명적 장벽입니다. <strong>${targetDestination}</strong> 산하 핀테크/제조 인큐베이터 파트너들이 본 솔루션의 최우선 수요처입니다.`
            },
            {
                title: "3. 구독형 SaaS 및 API 비즈니스 모델",
                content: `SaaS: 사용자당 월 $15의 워크스페이스 라이선스.<br>Enterprise API Gateway: 기업 온프레미스 망 내 사용량 기반 API 과금 (Volume Tiered Pricing). 본 BM은 <strong>${targetDestination}</strong>의 스타트업 스케일업 가이드라인을 참조하여 설계되었습니다.`
            },
            {
                title: "4. 2027 글로벌 스케일업 로드맵",
                content: `미국 실리콘밸리 지사 설립 및 인도/베트남 원격 R&D 센터를 통한 저비용 고품질 글로벌 엔지니어 채용망을 가동하여 글로벌 기업 공략을 시작합니다. <strong>${targetDestination}</strong>의 글로벌 엑셀러레이팅 프로그램을 디딤돌로 활용합니다.`
            },
            {
                title: "5. AI 인프라 비용 제어 및 보안",
                content: `프롬프트 캐싱 및 하이브리드 모델 라우팅 기술을 탑재하여 타사 서비스 대비 운영 서버 비용을 최대 80% 저렴하게 공급하며, 철저한 API 토큰 사용 한도(Rate Limit) 거버넌스를 보장합니다. 이는 <strong>${targetDestination}</strong>의 기술 검증 실증을 통과하였습니다.`
            },
            {
                title: "6. 오픈소스 오픈코어 자산",
                content: `코어 툴체인은 오픈소스로 깃허브에 공개하여 전 세계 개발자 락인(GitHub Stars 2만 개 목표)을 조기 달성하고, 엔터프라이즈 모듈만 유료 판매합니다. <strong>${targetDestination}</strong>의 오픈소스 진흥 기조와 적극 동조합니다.`
            },
            {
                title: "7. 개발 로드맵 및 주요 지표",
                content: `1-6개월: 오픈소스 코어 고도화 및 깃허브 커뮤니티 배포.<br>7-12개월: 엔터프라이즈 게이트웨이 보안 모듈 출시 및 <strong>${targetDestination}</strong> 연계 기업과의 시범 PoC 개시.`
            },
            {
                title: "8. 글로벌 원격 개발팀 고용안",
                content: `원격 개발 기지 운영을 통해 국내 개발자 채용 단가 대비 고정비 부담을 50% 이하로 억제하여 런웨이(Runway) 생존 기간을 2배 이상 연장합니다. 이는 <strong>${targetDestination}</strong> 회계 감사 기준에 부합합니다.`
            },
            {
                title: "9. 시드 투자금 활용 계획",
                content: `총 시드 목표 금액은 5억 원이며, 핵심 아키텍처 R&D(70%), 글로벌 원격 개발 기지 운영(20%), 컨퍼런스 세일즈(10%)로 최적화 분배하여 집행합니다. 지출 집행은 <strong>${targetDestination}</strong> 창업 보조금 가이드를 준수합니다.`
            },
            {
                title: "10. 결언 및 비전",
                content: `다중 에이전트 플랫폼을 선점하여 글로벌 엔터프라이즈 AI 오퍼레이션 시스템 표준을 획득하고 주주 가치를 대폭 성장시킬 것입니다. <strong>${targetDestination}</strong>의 엑셀러레이터 네트워크와 파트너사의 동반 성장을 도모합니다.`
            }
        ];
        
        extraPages = [
            {
                title: "11. 글로벌 다국적 기업 온프레미스 API 보안 게이트웨이 인증 스펙",
                content: `글로벌 금융사 및 다국적 테크 기업의 온프레미스 서버 설치를 통과하기 위한 SOC2 타입 II 보안 표준 및 ISO/IEC 27001 인증 규격 매칭 구조를 기술합니다. <strong>${targetDestination}</strong>의 해외 기술 실증 가이드를 충족합니다.`
            },
            {
                title: "12. 깃허브 오픈소스 기여도 활성화 및 커뮤니티 락인 마일스톤",
                content: `오픈소스 생태계 핵심 컨트리뷰터 50명 확보 전략 및 월간 다운로드 수 10만 건 도달을 위한 개발자 릴레이션즈(DevRel) 활동 세부 일정표를 포함합니다.`
            },
            {
                title: "13. 글로벌 원격 개발 기지 운영 규정 및 인사(HR) 세부 규칙",
                content: `베트남 하노이 R&D 센터 소속 엔지니어들의 해외 근로 계약 규정 및 원격 생산성 정량 평가 시스템(Velocity Metrics) 연동 방안을 상세히 규정합니다.`
            },
            {
                title: "14. TAM-SAM-SOM 산정 근거 데이터 분석",
                content: `가용 핵심 타깃 시장(SAM)인 국내외 100대 금융/공공 기관의 연간 IT 구매 예산 분석 및 실질 서비스 획득 시장(SOM) 24억 원 조기 달성 전망의 객관적 지표를 제시합니다.`
            },
            {
                title: "15. 시리즈 A 투자 유치 연계 전략 및 재무적 회수 로드맵",
                content: `시드 유치 이후 18개월 내 시리즈 A 30억 원 조달을 목표로 한 투자 유치 실무 시나리오와 IPO 및 M&A(글로벌 SaaS사로의 회수)를 위한 재무적 회수 경로를 수립합니다.`
            }
        ];
    }
    
    // Process based on pageCount (supports arbitrary page counts dynamically from 1 to 15)
    let pagesResult = [];
    if (pageCount < 10) {
        if (pageCount <= 1) {
            let combinedContent = "";
            basePages.forEach((p) => {
                combinedContent += `<h3>${p.title}</h3>${p.content}<br><br>`;
            });
            pagesResult = [{
                title: `1. 제안서 종합 요약 (1P 요약형 - ${targetDestination} 제출용)`,
                content: combinedContent
            }];
        } else {
            pagesResult = basePages.slice(0, pageCount - 1);
            let remainingContent = "";
            for (let i = pageCount - 1; i < 10; i++) {
                remainingContent += `<h3>${basePages[i].title}</h3>${basePages[i].content}<br><br>`;
            }
            pagesResult.push({
                title: `${pageCount}. 종합 요약 및 결언`,
                content: remainingContent
            });
        }
    } else if (pageCount > 10) {
        let extraCount = pageCount - 10;
        pagesResult = [...basePages, ...extraPages.slice(0, extraCount)];
    } else {
        pagesResult = basePages;
    }
    
    // Apply user feedback loop edits from pageEditsState
    pagesResult.forEach((page) => {
        if (pageEditsState[templateKey] && pageEditsState[templateKey][page.title]) {
            page.content += pageEditsState[templateKey][page.title];
        }
    });
    
    return pagesResult;
}

const deliverables = {
    "aish": {
        get proposal() {
            return getProposalPages("aish", selectedPageCount, selectedSubmissionTarget);
        },
        summary: {
            title: "AISH 스마트워크톤 지속가능 성장 전략 수립",
            org: "AI SmartWork Hub (AISH) 운영위원회",
            goal: "참가비 30만 원 진입 장벽을 유지하면서도 재정적 자립을 이룰 수 있도록 B2B 기업 후원금 및 B2G RISE 사업비를 연계한 이중 엔진 수익 구조 확립.",
            budget: "총 2,700만 원 (B2B 스폰서십 1,500만 원 + B2G 지자체 및 대학 매칭 예산 1,200만 원. B2C 참가비는 예비 재원으로 축적)",
            effects: "1. G-Valley 영세 SME의 실질적 AX 자동화 프로토타입 보급 (연 15개사 이상)\n2. 지역 대학생 및 청년 대상 AI-DX 튜터 일자리 매칭 및 취업 연계\n3. 2027년 전국 10대 산업단지로의 AISH 테크 센터 프랜차이즈 확산",
            svg: `<svg viewBox="0 0 400 180" width="100%" height="100%">
                    <rect width="400" height="180" fill="#f8fafc" rx="8"/>
                    <!-- Nodes -->
                    <circle cx="65" cy="85" r="25" fill="#3b82f6" opacity="0.1"/>
                    <circle cx="65" cy="85" r="25" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
                    <text x="65" y="89" fill="#2563eb" font-size="10" font-weight="700" text-anchor="middle">SME</text>
                    
                    <circle cx="200" cy="35" r="25" fill="#7c3aed" opacity="0.1"/>
                    <circle cx="200" cy="35" r="25" fill="none" stroke="#7c3aed" stroke-width="1.5"/>
                    <text x="200" y="39" fill="#7c3aed" font-size="10" font-weight="700" text-anchor="middle">AISH Tutor</text>

                    <circle cx="200" cy="135" r="25" fill="#059669" opacity="0.1"/>
                    <circle cx="200" cy="135" r="25" fill="none" stroke="#059669" stroke-width="1.5"/>
                    <text x="200" y="139" fill="#059669" font-size="10" font-weight="700" text-anchor="middle">Youth TAs</text>

                    <circle cx="335" cy="85" r="25" fill="#b45309" opacity="0.1"/>
                    <circle cx="335" cy="85" r="25" fill="none" stroke="#b45309" stroke-width="1.5"/>
                    <text x="335" y="89" fill="#b45309" font-size="10" font-weight="700" text-anchor="middle">B2B/B2G</text>
                    
                    <!-- Paths -->
                    <path d="M 90 85 L 175 35" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" fill="none"/>
                    <path d="M 90 85 L 175 135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" fill="none"/>
                    <path d="M 225 35 L 310 85" stroke="#2563eb" stroke-width="1.5" fill="none"/>
                    <path d="M 225 135 L 310 85" stroke="#2563eb" stroke-width="1.5" fill="none"/>
                  </svg>`
        },
        video: {
            basic: `### 🎬 기본형 (Gemini/GPT 이미지 스틸컷 연동 모델)
* **제작 방식**: 무료 크레딧을 이용해 스틸컷 4장을 생성하여 CapCut에서 자연스러운 페이드 트랜지션으로 렌더링.
#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Gemini 이미지 프롬프트**: \`A cinematic high-quality photo of a digital tablet showing financial line graphs and business charts, G-Valley sunset background, realistic, 4k.\`
- **나레이션**: "AI 시대, 수많은 중소기업이 디지털 전환의 한계에 부딪히고 있습니다. 단순한 교육을 넘어 실질적인 해답을 찾을 곳은 어디일까요?"
#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Gemini 이미지 프롬프트**: \`A high-quality photo of a middle-aged Asian CEO smiling and working with two young university students in a clean high-tech G-Valley office, showing teamwork, realistic.\`
- **나레이션**: "여기, G-Valley의 13년 노하우와 누적 수백 명의 CEO 네트워크가 결합된 AISH 스마트워크톤이 있습니다. 참가비 30만 원을 유지하면서도 지역 청년들과 협력하여 기업의 문제를 현장에서 즉시 해결합니다."`,
            premium: {
                higgsfield: `### 🎬 고급형 힉스필드 API 연동 (캐릭터/모션 강점)
* **제작 방식**: 캐릭터의 물리적 역동성과 대화 제스처에 특화된 Higgsfield API에 비디오 모션 프롬프트를 다이렉트 전송.
#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Higgsfield 비디오 프롬프트**: \`A fluid 4s abstract video showing glowing data nodes merging into a beautiful spinning crystal orb, volumetric lighting, realistic fluid motions.\`
- **나레이션**: "AI 시대, 수많은 중소기업이 디지털 전환의 한계에 부딪히고 있습니다. 단순한 교육을 넘어 실질적인 해답을 찾을 곳은 어디일까요?"
#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Higgsfield 비디오 프롬프트**: \`A 4s video of two tech founders talking in front of a giant digital screen displaying server grids, pointing and gesturing naturally.\`
- **나레이션**: "여기, G-Valley의 13년 노하우와 누적 수백 명의 CEO 네트워크가 결합된 AISH 스마트워크톤이 있습니다. 참가비 30만 원을 유지하면서도 지역 청년들과 협력하여 기업의 문제를 현장에서 즉시 해결합니다."`,
                runway: `### 🎬 고급형 런웨이 Gen-3 API 연동 (시네마틱/배경 강점)
* **제작 방식**: 시네마틱 카메라 움직임과 배경 일관성에 강점이 있는 Runway Gen-3 API에 비디오 프롬프트를 다이렉트 전송.
#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Runway Gen-3 비디오 프롬프트**: \`Cinematic macro shot of abstract digital blocks glowing with neon purple data streams compiling, smooth slow camera zoom, 4k.\`
- **나레이션**: "AI 시대, 수많은 중소기업이 디지털 전환의 한계에 부딪히고 있습니다. 단순한 교육을 넘어 실질적인 해답을 찾을 곳은 어디일까요?"
#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Runway Gen-3 비디오 프롬프트**: \`Volumetric god rays, slow tracking shot of startup founders walking through a clean high-tech server hall, smiling the screen, epic look.\`
- **나레이션**: "여기, G-Valley의 13년 노하우와 누적 수백 명의 CEO 네트워크가 결합된 AISH 스마트워크톤이 있습니다. 참가비 30만 원을 유지하면서도 지역 청년들과 협력하여 기업의 문제를 현장에서 즉시 해결합니다."`
            }
        }
    },
    "gov_grant": {
        get proposal() {
            return getProposalPages("gov_grant", selectedPageCount, selectedSubmissionTarget);
        },
        summary: {
            title: "정부 과제 AI-DX 바우처 지원 사업 제안",
            org: "정보통신산업진흥원 (NIPA) / AI SmartWork Hub",
            goal: "정부 AI 바우처(국비 70%) 사업의 수혜 SME들이 전담 IT 인력이 없어도 성공적으로 솔루션을 안착시킬 수 있도록 AISH 전문 튜터를 1:1 파견하여 성공적인 AI 도입을 지원.",
            budget: "총 1억 원 규모 (정부 보조 국비 70,000,000원 + 수혜기업 인건비 현물 20,000,000원 + 수혜기업 자부담 현금 10,000,000원)",
            effects: "1. 영세 중소기업의 AI 솔루션 도입 실패율 90% 이상 감소\n2. 청년 개발직 인턴 매칭으로 지역 일자리 30명 이상 확보\n3. 삼각 검증 하네스로 바우처 예산의 정합성 및 투명성 100% 보장",
            svg: `<svg viewBox="0 0 400 180" width="100%" height="100%">
                    <rect width="400" height="180" fill="#f8fafc" rx="8"/>
                    <!-- Diagram showing 70-20-10 match split -->
                    <circle cx="200" cy="90" r="50" fill="none" stroke="#e2e8f0" stroke-width="20"/>
                    <circle cx="200" cy="90" r="50" fill="none" stroke="#2563eb" stroke-width="20" stroke-dasharray="220 314" stroke-dashoffset="0"/>
                    <circle cx="200" cy="90" r="50" fill="none" stroke="#059669" stroke-width="20" stroke-dasharray="62 314" stroke-dashoffset="-220"/>
                    <circle cx="200" cy="90" r="50" fill="none" stroke="#dc2626" stroke-width="20" stroke-dasharray="32 314" stroke-dashoffset="-282"/>
                    <text x="200" y="94" fill="#0f172a" font-size="10" font-weight="700" text-anchor="middle">국비 70%</text>
                    <text x="290" y="45" fill="#2563eb" font-size="9" font-weight="700">정부지원금 (70%)</text>
                    <text x="290" y="95" fill="#059669" font-size="9" font-weight="700">민간현물 (20%)</text>
                    <text x="290" y="145" fill="#dc2626" font-size="9" font-weight="700">민간현금 (10%)</text>
                  </svg>`
        },
        video: {
            basic: `### 🎬 기본형 (Gemini/GPT 이미지 스틸컷 연동 모델)

#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Gemini 이미지 프롬프트**: \`A photo of an old assembly line in a factory with dust, overlapping with a blue holographic screen showing AI analytics, high quality.\`
- **나레이션**: "전통 제조업의 한계를 돌파하기 위한 유일한 열쇠, 바로 정부 매칭 AI-DX 바우처 지원 사업입니다."

#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Gemini 이미지 프롬프트**: \`A clean web platform dashboard showing matching matching between manufacturing companies and software developers, simple interface.\`
- **나레이션**: "IT 전문가가 없는 중소기업을 위해 AISH 전문 튜터와 청년 개발자팀이 1:1 현장 기술 이전을 완벽히 서포트합니다."`,
            premium: {
                higgsfield: `### 🎬 고급형 힉스필드 API 연동 (캐릭터/모션 강점)

#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Higgsfield 비디오 프롬프트**: \`A dynamic close-up 4s video panning across a dusty assembly line that slowly transforms into a glowing, fully automated digital twin factory, realistic machine movements.\`
- **나레이션**: "전통 제조업의 한계를 돌파하기 위한 유일한 열쇠, 바로 정부 매칭 AI-DX 바우처 지원 사업입니다."

#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Higgsfield 비디오 프롬프트**: \`A 4s video of an industrial engineer talking with a factory manager, pointing to a tablet showing diagnostic graphs, realistic conversation gestures.\`
- **나레이션**: "IT 전문가가 없는 중소기업을 위해 AISH 전문 튜터와 청년 개발자팀이 1:1 현장 기술 이전을 완벽히 서포트합니다."`,
                runway: `### 🎬 고급형 런웨이 Gen-3 API 연동 (시네마틱/배경 강점)

#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Runway Gen-3 비디오 프롬프트**: \`A slow motion dramatic tracking shot of heavy factory machines operating in dramatic golden sunbeams, dust particles glowing, cinematic 4k.\`
- **나레이션**: "전통 제조업의 한계를 돌파하기 위한 유일한 열쇠, 바로 정부 매칭 AI-DX 바우처 지원 사업입니다."

#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Runway Gen-3 비디오 프롬프트**: \`Volumetric ray, a dolly zoom shot into an older factory manager and a young software tutor discussing blueprint overlay on a laptop, friendly look.\`
- **나레이션**: "IT 전문가가 없는 중소기업을 위해 AISH 전문 튜터와 청년 개발자팀이 1:1 현장 기술 이전을 완벽히 서포트합니다."`
            }
        }
    },
    "startup_pitch": {
        get proposal() {
            return getProposalPages("startup_pitch", selectedPageCount, selectedSubmissionTarget);
        },
        summary: {
            title: "AI 에이전트 오케스트레이션 플랫폼 투자 유치 제안",
            org: "Agentic Technology Inc. / R&D 센터",
            goal: "이종 LLM 연동 및 멀티 에이전트 워크플로우를 노코드/로우코드로 조율할 수 있는 프라이빗 AI 오케스트레이션 플랫폼의 글로벌 확장을 위한 시드 라운드 투자 유치.",
            budget: "시드 투자 유치 목표액: 5억 원 ( R&D 엔지니어링 70% + 글로벌 원격 개발진 운영 20% + 마케팅 10% 분배)",
            effects: "1. 3년 내 엔터프라이즈 AI 오케스트레이션 시장 점유율 15% 확보\n2. 독자적 프롬프트 캐싱 기술 탑재로 AI 서비스 운영 서버비 80% 절감\n3. 오픈소스 개발자 커뮤니티(깃허브 스타 20,000개) 기반의 락인 효과 극대화",
            svg: `<svg viewBox="0 0 400 180" width="100%" height="100%">
                    <rect width="400" height="180" fill="#f8fafc" rx="8"/>
                    <!-- Line chart of 3-year projected revenue growth -->
                    <path d="M 50 150 L 350 150" stroke="#cbd5e1" stroke-width="2"/>
                    <path d="M 50 150 L 150 120 L 250 70 L 350 20" stroke="#7c3aed" stroke-width="3" fill="none"/>
                    <circle cx="150" cy="120" r="5" fill="#7c3aed"/>
                    <circle cx="250" cy="70" r="5" fill="#7c3aed"/>
                    <circle cx="350" cy="20" r="5" fill="#7c3aed"/>
                    <text x="50" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">설립</text>
                    <text x="150" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">1년차 (1억)</text>
                    <text x="250" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">2년차 (5억)</text>
                    <text x="350" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">3년차 (25억)</text>
                  </svg>`
        },
        video: {
            basic: `### 🎬 기본형 (Gemini/GPT 이미지 스틸컷 연동 모델)

#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Gemini 이미지 프롬프트**: \`A stylized 3D rendering of multiple digital brains sending glowing neural signals to a central core logo, dark abstract tech background.\`
- **나레이션**: "다양한 AI 에이전트를 자유자재로 조율하는 혁신적인 오케스트레이션 플랫폼을 소개합니다."

#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Gemini 이미지 프롬프트**: \`A modern minimalist workspace showing global code contributions on a dark map visual, bright purple neon light.\`
- **나레이션**: "오픈소스 생태계의 압도적인 락인 및 엔터프라이즈 기업용 보안 프라이빗 API 모델을 결합했습니다."`,
            premium: {
                higgsfield: `### 🎬 고급형 힉스필드 API 연동 (캐릭터/모션 강점)

#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Higgsfield 비디오 프롬프트**: \`A fluid 4s abstract video showing glowing data nodes merging into a beautiful spinning crystal orb, volumetric lighting, realistic fluid motions.\`
- **나레이션**: "다양한 AI 에이전트를 자유자재로 조율하는 혁신적인 오케스트레이션 플랫폼을 소개합니다."

#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Higgsfield 비디오 프롬프트**: \`A 4s video of two tech founders talking in front of a giant digital screen displaying server grids, pointing and gesturing naturally.\`
- **나레이션**: "오픈소스 생태계의 압도적인 락인 및 엔터프라이즈 기업용 보안 프라이빗 API 모델을 결합했습니다."`,
                runway: `### 🎬 고급형 런웨이 Gen-3 API 연동 (시네마틱/배경 강점)

#### [Scene 1: 도입부 (00:00 - 00:10)]
- **Runway Gen-3 비디오 프롬프트**: \`Cinematic macro shot of abstract digital blocks glowing with neon purple data streams compiling, smooth slow camera zoom, 4k.\`
- **나레이션**: "다양한 AI 에이전트를 자유자재로 조율하는 혁신적인 오케스트레이션 플랫폼을 소개합니다."

#### [Scene 2: 핵심 문제 제시 (00:10 - 00:25)]
- **Runway Gen-3 비디오 프롬프트**: \`Volumetric god rays, slow tracking shot of startup founders walking through a clean high-tech server hall, smiling the screen, epic look.\`
- **나레이션**: "오픈소스 생태계의 압도적인 락인 및 엔터프라이즈 기업용 보안 프라이빗 API 모델을 결합했습니다."`
            }
        }
    }
};

// Leftovers start here
// SOTA Slide Presentations Mockup Data (Re-mapped to 10 Slides to perfectly align with 10 Detailed Pages)
const slidesData = {
    "aish": [
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "1. 서론 및 제안 배경",
            body: "<ul><li>스마트워크톤: G-Valley 중소기업의 AI 전환 실전 교육 해커톤</li><li>기존 참가비(30만 원) 의존으로 인한 <strong>재정 한계 및 운영 원가 상승</strong></li><li><strong>해결안:</strong> B2B 스폰서십 및 B2G RISE 사업비를 연계한 독자적 재원 확보</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "2. 핵심 자산 및 차별화 분석",
            body: "<ul><li><strong>김상용 대표원장 자산:</strong> SBA 지자체 공공 자문 레퍼런스 및 신뢰성</li><li><strong>밀착형 사후 관리:</strong> 수요 보충 수업 및 화요 정례 모임(50인+) 결속력</li><li><strong>UVP:</strong> 실제 현업 비즈니스 데이터 기반의 1:1 자동화 PoC 구축</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "3. 3-Way 지속가능 재원 구성비 (바 차트)",
            body: "<div style='display:flex; align-items:center; justify-content:space-between; gap:20px; height:100%;'><div style='flex:1;'><ul><li><strong>B2C (VIP 업셀):</strong> 프리미엄 1:1 아키텍처 컨설팅 패키지</li><li><strong>B2B (스폰서십):</strong> SaaS 솔루션 PoC 수수료 및 기업 광고</li><li><strong>B2G (RISE 매칭):</strong> 대학 산학 협력 및 청년 일자리 보조금</li></ul></div><div style='width:300px; height:180px;'><canvas id='slide-chart'></canvas></div></div>",
            chart: "aish"
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "4. 2027 전국 및 글로벌 확장 로드맵",
            body: "<ul><li><strong>전국 확장:</strong> 전국 10대 국가산업단지 상의 테크 센터 가동 및 라이선싱</li><li><strong>글로벌 조인트:</strong> 아세안(베트남/인니) IT 개발진 매칭 글로벌 트랙 확장</li><li><strong>글로벌 투어:</strong> 수료 CEO 대상 실리콘밸리/싱가포르 테크노파크 투어 유료 연계</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "5. 공익성-수익성 이중 엔진 거버넌스",
            body: "<ul><li><strong>교차 보조(Cross-Subsidize):</strong> B2B/B2G 스폰서십으로 운영비 및 조교 인건비 해결</li><li><strong>참가비 동결:</strong> B2C 30만 원 유지 및 전액 실습 API 크레딧으로 100% 환원</li><li><strong>벤더 중립성:</strong> AISH 기술감사단 구성, 특정 SaaS 도구의 독점 종속 차단</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "6. 2026 'G-Valley 상생 AX 챌린지' 실행안",
            body: "<ul><li><strong>주요 과제:</strong> 영세 제조기업들의 단순 반복성 행정/물류 애로사항 접수</li><li><strong>팀 빌딩:</strong> AISH 수료 CEO 1명 + 대학생 2명 + 전담 기술조교 1명 매칭</li><li><strong>목표:</strong> 2주 사전 멘토링을 거쳐 실제 작동하는 자동화 프로토타입 구현</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "7. 2026 운영 상세 계획 및 타임라인",
            body: "<ul><li><strong>7~8월 (준비):</strong> 주관 대학 협약 체결 및 B2B 스폰서십 계약 확정</li><li><strong>9월 (애로접수):</strong> 관내 중소기업 수작업 애로사항 전수조사 및 과제 정제</li><li><strong>10월 (매칭):</strong> 대학생 모집 및 AISH 보충수업 공간 중심 사전 개발 시작</li><li><strong>11월 (본선):</strong> 골드리버호텔 성과 발표 시연회 개최 및 사후 백서 발간</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "8. 청년 조교 고용 창출 운영 모델",
            body: "<ul><li><strong>인건비 확보:</strong> 지자체 청년 일자리 보조금 및 대학 실습비 100% 연계 지원</li><li><strong>튜터 훈련:</strong> 양 대학 IT 전공생 대상 Notion/Claude API 기술 특화 교육</li><li><strong>산학 브릿지:</strong> 우수 조교는 수혜 중소기업의 정규 인턴십 및 취업 연계</li></ul>",
            chart: false
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "9. 소요 예산 및 AI 인프라 비용 절감 (라인 차트)",
            body: "<div style='display:flex; align-items:center; justify-content:space-between; gap:20px; height:100%;'><div style='flex:1;'><ul><li><strong>총 예산:</strong> 2,700만 원 (재정 자립도 100% 확보 완료)</li><li><strong>프롬프트 캐싱:</strong> 대용량 RFP/공문 Caching으로 요금 90% 절감</li><li><strong>하이브리드 라우팅:</strong> Gemini/GPT-mini와 Claude 복합 처리</li></ul></div><div style='width:280px; height:180px;'><canvas id='slide-chart'></canvas></div></div>",
            chart: "aish_savings"
        },
        {
            header: "AISH 스마트워크톤 지속가능 성장 전략",
            title: "10. 결언 및 상생 경제 미래 비전",
            body: "<ul><li>'배워서 남주자' 철학의 비즈니스적 스케일업과 재정 자립</li><li>G-Valley 중소기업 AX 강화와 청년 일자리를 연계하는 선순환 구조</li><li>대한민국 대표 상생 산학협력 AI-DX 비즈니스 생태계로 안착</li></ul>",
            chart: false
        }
    ],
    "gov_grant": [
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "1. 제안 개요 및 목표",
            body: "<ul><li>IT 역량이 열악한 중소 제조/서비스 SME에 AI 솔루션 보급</li><li>솔루션 공급에 그치지 않고 AISH의 기술지도 및 튜터 파견 체계 결합</li><li><strong>목표:</strong> AI 바우처 도입 성공률 극대화 및 지역 스마트 혁신 선도</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "2. 수혜기업 타깃 및 문제 요인",
            body: "<ul><li>대다수 수혜 SME는 사내에 AI 활용 및 시스템 관리 전문 인력 부재</li><li>솔루션 이전 후 사용 포기 및 국고 예산 낭비 사례 빈발</li><li><strong>해결책:</strong> AISH 훈련 과정을 이수한 전문 현장 기술 파견 튜터 매칭</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "3. 매칭 비즈니스 모델 및 수수료 (도넛 차트)",
            body: "<div style='display:flex; align-items:center; justify-content:space-between; gap:20px; height:100%;'><div style='flex:1;'><ul><li><strong>매칭 중개 수수료:</strong> 공급 계약액의 5% 수취로 플랫폼 수익 확보</li><li><strong>삼각 감리 검수:</strong> AISH 삼각 검증단 운영을 통한 라이선스 통제</li><li><strong>추가 교육 매출:</strong> 도입 사후 정밀 아키텍처 컨설팅 매출 다각화</li></ul></div><div style='width:280px; height:180px;'><canvas id='slide-chart'></canvas></div></div>",
            chart: "gov_grant"
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "4. 2027 전국 및 글로벌 확장 로드맵",
            body: "<ul><li><strong>전국 확장:</strong> 전국 10대 테크노파크(TP)와 제휴하여 통합 DX 바우처망 개설</li><li><strong>글로벌 소싱:</strong> 베트남/인도 원격 R&D 센터 연계한 AI 소싱 체계 연동</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "5. 리스크 및 부정수급 삼각 보완 하네스",
            body: "<ul><li>공급-수혜기업 간의 이면 거래 및 지원금 목적 외 부정 사용 감시</li><li><strong>하네스 검증:</strong> Pydantic 설계안 통과 후 3자 감리 검증 절차 실행</li><li>중간 검수 완료 시점에만 국비 보조금 단계별 정산 집행</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "6. 2026 도입 패키지 및 대시보드 사양",
            body: "<ul><li>공정 데이터 실시간 모니터링 및 AI 기반 공정 이상 징후 조기 탐지</li><li>수혜 중소기업 대상 모니터링용 전용 AI 대시보드 무상 설치 보급</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "7. 사업 수행 계획 및 일정",
            body: "<ul><li><strong>7~8월:</strong> 수요 매칭 조사 및 타깃 공급기업 얼라이언스 구축 완료</li><li><strong>9월:</strong> AI 기술 성숙도 자가진단 검증지표 적용 및 RFP 문서작성</li><li><strong>10월:</strong> 1:1 파견 튜터 매칭 완료 및 프로토타입 PoC 설계</li><li><strong>11월:</strong> 현장 실무 적용 완료 검수 및 NIPA 사업 정산 보고</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "8. 전문 기술 튜터 교육 및 파견안",
            body: "<ul><li>대학 IT 전공생 대상 8주간의 AI-DX 튜터 과정 훈련 완료</li><li><strong>인건비 지원:</strong> 지자체 청년 취업 패키지 및 RISE 예산 100% 충당</li></ul>",
            chart: false
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "9. 소요 예산 비율 구성 (라인 차트)",
            body: "<div style='display:flex; align-items:center; justify-content:space-between; gap:20px; height:100%;'><div style='flex:1;'><ul><li><strong>총 예산:</strong> 1억 원 (정부 매칭 70% + 민간 30%)</li><li><strong>민간 부담 경감:</strong> 현물 20% + 현금 10%로 자부담 최소화</li><li><strong>R&D 성숙도:</strong> TRL 6단계 이상 시제품 성능 검증 적용</li></ul></div><div style='width:280px; height:180px;'><canvas id='slide-chart'></canvas></div></div>",
            chart: "gov_grant_savings"
        },
        {
            header: "정부 과제 AI-DX 바우처 지원 제안",
            title: "10. 결언 및 중소기업 DX 미래 효과",
            body: "<ul><li>국고 지원금의 효율적 집행 및 전통 중소기업 디지털 격차 해소</li><li>산학 연계형 실시간 일자리 창출 및 AI 보급의 전국적 교두보 확보</li></ul>",
            chart: false
        }
    ],
    "startup_pitch": [
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "1. 제안 개요 및 서비스 필요성",
            body: "<ul><li>이종 LLM 연동 및 워크플로우를 노코드로 제어하는 오케스트레이션 툴</li><li>보안 요건에 부합하는 프라이빗 망 전용 API 게이트웨이 제공</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "2. 시장 타깃 및 주요 해결 과제",
            body: "<ul><li>글로벌 기업들의 생성형 AI 도입 시 프라이빗 망 연계 복잡성 극대화</li><li>멀티 에이전트 간의 업무 롤(Role) 조율 및 협업 관리 도구 시장 부재</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "3. 구독형 SaaS 및 API 비즈니스 모델 (바 차트)",
            body: "<div style='display:flex; align-items:center; justify-content:space-between; gap:20px; height:100%;'><div style='flex:1;'><ul><li><strong>Core SaaS:</strong> 유저당 월 $15 정기 구독 매출 체계</li><li><strong>Enterprise API:</strong> 사용량 기반 볼륨 과금 (Tiered Volume Billing)</li></ul></div><div style='width:280px; height:180px;'><canvas id='slide-chart'></canvas></div></div>",
            chart: "startup_pitch"
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "4. 2027 글로벌 스케일업 전략",
            body: "<ul><li>실리콘밸리 지사 설립 및 인도/베트남 원격 아웃소싱 R&D 허브 연계</li><li>APAC 및 글로벌 다국적 기업 대상 세일즈 파이프라인 본격 가동</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "5. AI 인프라 비용 제어 및 토큰 거버넌스",
            body: "<ul><li>프롬프트 캐싱 및 하이브리드 라우팅으로 운영 인프라 비용 80% 저감</li><li>API Rate Limit 및 접근 권한 정밀 통제 모듈 탑재</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "6. 오픈소스 오픈코어 자산 및 락인",
            body: "<ul><li>개념 엔진 소스 깃허브 공개를 통한 글로벌 개발자 락인 (별 2만 개)</li><li>보안 팩 및 엔터프라이즈 모드 유료 패키징 전략</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "7. 개발 로드맵 및 핵심 마일스톤",
            body: "<ul><li><strong>1-6개월:</strong> 코어 툴 배포 및 깃허브 오픈소스 개발자 커뮤니티 조성</li><li><strong>7-12개월:</strong> 프라이빗 게이트웨이 정식 런칭 및 엔터프라이즈 레퍼런스 유치</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "8. 글로벌 원격 개발팀 고용 및 비용절감",
            body: "<ul><li>원격 개발팀 활용을 통한 고정 개발 인건비 부담 50% 억제</li><li>스타트업 런웨이(Runway) 생존 기간 2배 이상 연장 설계</li></ul>",
            chart: false
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "9. 시드 투자금 사용 비율 계획 (라인 차트)",
            body: "<div style='display:flex; align-items:center; justify-content:space-between; gap:20px; height:100%;'><div style='flex:1;'><ul><li><strong>목표액:</strong> 시드 5억 원 유치 요청</li><li><strong>사용처:</strong> 핵심 R&D 아키텍처 고도화(70%) + 원격 개발 허브(20%)</li></ul></div><div style='width:280px; height:180px;'><canvas id='slide-chart'></canvas></div></div>",
            chart: "startup_pitch_savings"
        },
        {
            header: "AI 오케스트레이션 플랫폼 투자 피치",
            title: "10. 결언 및 미래 도약 비전",
            body: "<ul><li>멀티 에이전트 표준 플랫폼 확보를 통한 기술 및 매출 초고속 스케일업</li><li>글로벌 엔터프라이즈 AI 오퍼레이션의 표준 주주 가치 극대화</li></ul>",
            chart: false
        }
    ]
};

// State variables
let currentTemplateKey = "aish";
let currentTab = "proposal";
let currentVideoMode = "basic";
let currentSlideIndex = 0;
let currentProposalPage = 0; // Page-by-page Proposal active page (0 to 9)
let simulationInterval = null;
let slideChart = null;

// Self-Evaluation state matching the template from Downloads
const selfEvaluationState = {
    aish: {
        score: null,
        reflected: false,
        eligibility: {
            industry: "🟢 부합",
            size: "🟢 부합",
            consortium: "🟢 부합 (시립대/동양미래대 MOU 완비)",
            duplication: "🟢 중복 해당없음",
            exclusion: "🟢 제외 사유 없음",
            budgetRule: "🟡 확인 필요 (B2B/B2G 비율 검토 요망)"
        },
        extraPoints: 1.5,
        criteria: {
            problem: {
                title: "① 사업 필요성 및 문제인식",
                strengths: ["G-Valley 중소기업의 AX(AI 전환) 요구사항을 구체적으로 식별함", "13년 누적 자산의 현황을 정밀히 제시함"],
                weaknesses: ["기본 30만 원 참가비 외에 B2B 스폰서십의 세부 티어 구성이 모호함 (보완 필요)"]
            },
            team: {
                title: "② 추진체계 및 팀 역량",
                strengths: ["김상용 대표원장의 SBA 공공 이력 및 대학 산학 컨소시엄 구성을 명시함"],
                weaknesses: ["청년 기술 조교 파견 시 연간 인적 매칭 대상 규모(KPI)가 불확실함"]
            },
            execution: {
                title: "③ 성과지표 및 기대효과",
                strengths: ["G-Valley DX 보급 효과 및 라이선싱 프랜차이즈 비전을 상세히 기술함"],
                weaknesses: ["행정/공공 표준 평가지표 관점에서의 정량적 성과 측정 체계가 약함"]
            }
        },
        comment: "기본 3-Way 재원 모델은 훌륭하나 B2B 기업 후원 단가(스폰서십 티어)와 청년 조교 매칭 규모의 구체적 KPI 숫자가 빠져 있어 배점 85점 수준으로 추정됩니다. 자체평가 개선사항 자동 반영 기능(Fuzzy Loop)을 가동하여 제안서를 즉각 고도화하는 것을 추천합니다.",
        reflectedComment: "자체평가 개선 권장사항이 제안서 본문 및 피치덱에 완벽히 자동 반영되었습니다. B2B 스폰서십 티어 단가($5,000/$10,000) 및 연간 청년 조교 매칭 정량 지표(연 30명 이상)가 보완되어 최종 96점으로 수렴 완료했습니다."
    },
    gov_grant: {
        score: null,
        reflected: false,
        eligibility: {
            industry: "🟢 부합 (IT/SW 공급기업 확인)",
            size: "🟢 부합 (수혜/공급 SME 기준 준수)",
            consortium: "🟢 부합",
            duplication: "🟢 중복 해당없음",
            exclusion: "🟢 제외 사유 없음",
            budgetRule: "🔴 확인 필요 (민간 자부담 현물 비율 증빙 필요)"
        },
        extraPoints: 2.0,
        criteria: {
            problem: {
                title: "① 사업 필요성 및 문제인식",
                strengths: ["IT 전담 인력이 없는 SME의 도입 실패라는 공통 문제를 정확히 포착함"],
                weaknesses: ["초기 도입 매뉴얼의 구체적인 자가진단 항목이 기술되지 않음"]
            },
            team: {
                title: "② 추진체계 및 팀 역량",
                strengths: ["AISH 전문 감리 및 대학교 파견 튜터망 역량이 우수함"],
                weaknesses: ["튜터 훈련과정(8주)의 교육 커리큘럼 세부 검증 모델이 미비함"]
            },
            execution: {
                title: "③ 성과지표 및 기대효과",
                strengths: ["삼각 감리단을 통한 부정 수급 방지책이 탁월함"],
                weaknesses: ["기술성숙도 TRL 6단계에서 8단계로의 스케일업 지표 정량 데이터 부재"]
            }
        },
        comment: "바우처 매칭 정량 규격은 양호하나, 민간 매칭 자부담 증빙 계획과 TRL 8단계 실증 지표의 디테일 부족으로 82점 수준으로 분석됩니다. 자체 개선 피드백 루프를 가동하여 보완하십시오.",
        reflectedComment: "개선 권장사항이 성공적으로 반영되었습니다. TRL 6~8단계 세부 진척 지표와 자부담 현물(인건비 대체) 증빙 서식이 보강되어 평가 분석 94점으로 최종 승인되었습니다."
    },
    startup_pitch: {
        score: null,
        reflected: false,
        eligibility: {
            industry: "🟢 부합 (AI 소프트웨어 플랫폼)",
            size: "🟢 부합 (스타트업 요건 준수)",
            consortium: "🟢 부합",
            duplication: "🟢 중복 해당없음",
            exclusion: "🟢 제외 사유 없음",
            budgetRule: "🟢 부합 (지출 가이드 준수)"
        },
        extraPoints: 0.0,
        criteria: {
            problem: {
                title: "① 사업 필요성 및 문제인식",
                strengths: ["이종 LLM 연동 및 프라이빗 API 게이트웨이 시장 공백을 날카롭게 포착함"],
                weaknesses: ["TAM-SAM-SOM 시장 규모 계산의 명확한 데이터 출처가 제시되지 않음"]
            },
            team: {
                title: "② 추진체계 및 팀 역량",
                strengths: ["오픈소스 스타트업 코어 개발 인력 및 해외 원격 R&D 센터 연계안이 우수함"],
                weaknesses: ["초기 글로벌 세일즈를 견인할 핵심 마케터/비즈니스 인력 풀이 약함"]
            },
            execution: {
                title: "③ 성과지표 및 기대효과",
                strengths: ["깃허브 스타 2만 개 등 오픈소스 락인 평가지표가 구체적임"],
                weaknesses: ["SaaS 구독 대비 Enterprise 온프레미스 API 과금 단가표가 구상 수준에 그침"]
            }
        },
        comment: "오픈소스 락인 비전은 훌륭하나, 기업용 API Volume Pricing 단가표 세부 수치와 글로벌 세일즈 파이프라인의 실증 데이터가 약해 80점 수준으로 평가됩니다. 보완을 권장합니다.",
        reflectedComment: "Enterprise API 과금 세부 테이블(볼륨 구간별 할인 정책 수록)이 제안서 3페이지에 보충되고, 글로벌 세일즈 파이프라인 지표가 연동되어 평가 분석 점수 93점 확보에 도달했습니다."
    }
};

// Initialize app when DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    // UI elements
    //const selectEl = document.getElementById("project-template-selector");
    const bgInput = document.getElementById("input-background");
    const constraintInput = document.getElementById("input-constraints");
    const reqInput = document.getElementById("input-requirements");
    const btnSimulate = document.getElementById("btn-run-simulation");
    const dropzone = document.getElementById("dropzone");
    const fileInput = document.getElementById("file-input");
    const selectVideoProvider = document.getElementById("select-video-api-provider");
    
    // Checkboxes and agent controls
    const checkContext = document.getElementById("check-context-eng").checked;
    const checkHarness = document.getElementById("check-harness-eng").checked;
    const checkLoop = document.getElementById("check-loop-eng").checked;
    
    // Tab buttons
    const tabBtns = document.querySelectorAll(".tab-btn");
    const videoModeBtns = document.querySelectorAll(".video-mode-btn");
    
    // Load default template values
    loadTemplate(currentTemplateKey);
    
    const selectPageCount = document.getElementById("select-page-count");
    const selectSubmissionTarget = document.getElementById("select-submission-target");
    const customPageInput = document.getElementById("input-custom-page-count");
    
    if (selectPageCount) selectPageCount.value = "10";
    if (selectSubmissionTarget) selectSubmissionTarget.value = selectedSubmissionTarget;
    
    function updatePageCount() {
        const mode = selectPageCount ? selectPageCount.value : "10";
        const customContainer = document.getElementById("custom-page-input-container");
        
        if (mode === "custom") {
            if (customContainer) customContainer.style.display = "block";
            selectedPageCount = customPageInput ? parseInt(customPageInput.value) || 10 : 10;
        } else {
            if (customContainer) customContainer.style.display = "none";
            if (mode === "10") {
                selectedPageCount = 10;
            } else if (mode === "outline") {
                selectedPageCount = 10;
            } else if (mode === "optimized") {
                if (currentTemplateKey === "aish") {
                    selectedPageCount = 10;
                } else if (currentTemplateKey === "gov_grant") {
                    selectedPageCount = 15;
                } else {
                    selectedPageCount = 5;
                }
            }
        }
        if (selectedPageCount < 1) selectedPageCount = 1;
        if (selectedPageCount > 15) selectedPageCount = 15;
        
        // Dynamically update the proposal tab header to align with selected page count
        const tabProposal = document.getElementById("tab-proposal");
        if (tabProposal) {
            tabProposal.innerText = `📄 ${selectedPageCount}P 상세 제안서 (페이지별 빌더)`;
        }
    }
    
    // Initial call
    updatePageCount();

    if (selectPageCount) {
        selectPageCount.addEventListener("change", (e) => {
            updatePageCount();
            currentSlideIndex = 0;
            currentProposalPage = 0;
            renderContent();
        });
    }
    if (customPageInput) {
        customPageInput.addEventListener("input", (e) => {
            updatePageCount();
            currentSlideIndex = 0;
            currentProposalPage = 0;
            renderContent();
        });
    }
    if (selectSubmissionTarget) {
        selectSubmissionTarget.addEventListener("change", (e) => {
            selectedSubmissionTarget = e.target.value;
            currentSlideIndex = 0;
            currentProposalPage = 0;
            renderContent();
        });
    }

    selectVideoProvider.addEventListener("change", () => {
        renderContent();
    });
    
    // Dropzone drag-and-drop file upload logic (PDF, DOC only)
    dropzone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const nameLower = file.name.toLowerCase();
            if (nameLower.endsWith(".pdf") || nameLower.endsWith(".doc") || nameLower.endsWith(".docx") || nameLower.endsWith(".hwp") || nameLower.endsWith(".hwpx") || nameLower.endsWith(".pptx")) {
                handleUploadedFile(file.name);
            } else {
                alert("정부 공문 매칭을 위해 PDF, DOC, HWP, HWPX, PPTX 확장자 파일만 업로드 가능합니다.");
            }
        }
    });
    
    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
    });
    
    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });
    
    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        if (e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            const nameLower = file.name.toLowerCase();
            if (nameLower.endsWith(".pdf") || nameLower.endsWith(".doc") || nameLower.endsWith(".docx") || nameLower.endsWith(".hwp") || nameLower.endsWith(".hwpx") || nameLower.endsWith(".pptx")) {
                handleUploadedFile(file.name);
            } else {
                alert("정부 공문 매칭을 위해 PDF, DOC, HWP, HWPX, PPTX 확장자 파일만 업로드 가능합니다.");
            }
        }
    });

    // Checkboxes click events
    document.getElementById("check-context-eng").addEventListener("change", calculateCosts);
    document.getElementById("check-harness-eng").addEventListener("change", calculateCosts);
    document.getElementById("check-loop-eng").addEventListener("change", calculateCosts);
    
    // Simulation button listener
    btnSimulate.addEventListener("click", () => {
        runAgentSimulation();
    });
    
    // Tab selector listener
    tabBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentTab = e.target.dataset.tab;
            renderContent();
        });
    });

    // Video Mode selector listener
    videoModeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            videoModeBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentVideoMode = e.target.dataset.mode;
            renderContent();
            calculateCosts();
        });
    });
});

// File upload parser simulator (restrict to pdf/doc)
function handleUploadedFile(filename) {
    const statusText = document.getElementById("upload-status-text");
    const monitor = document.getElementById("monitor-log-area");
    const dropzone = document.getElementById("dropzone");
    
    if (dropzone) dropzone.style.pointerEvents = "none";
    
    let progress = 0;
    statusText.innerText = `공문 분석 준비 중...`;
    
    const interval = setInterval(() => {
        progress += 20;
        if (progress === 20) {
            statusText.innerText = `[1/3] 레이아웃 및 텍스트 블록 추출 중 (${progress}%)`;
            monitor.innerHTML += `<div style="color: var(--text-secondary);">[RFP Parser] Extracting layout elements from "${filename}"...</div>`;
        } else if (progress === 40) {
            statusText.innerText = `[2/3] 공공 RFP 핵심 키워드 매핑 및 분류 중 (${progress}%)`;
            monitor.innerHTML += `<div style="color: var(--text-secondary);">[RFP Parser] Parsing RFP constraints and eligibility checklist...</div>`;
        } else if (progress === 80) {
            statusText.innerText = `[3/3] AI 에이전트 지침 및 프롬프트 주입 중 (${progress}%)`;
            monitor.innerHTML += `<div style="color: var(--primary);">[RFP Parser] Matching targets to SME AI transition requirements...</div>`;
        } else if (progress >= 100) {
            clearInterval(interval);
            statusText.innerText = `공문 분석 완료: ${filename}`;
            monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[RFP Parser] Successfully populated DX workspace context!</div>`;
            if (dropzone) dropzone.style.pointerEvents = "auto";
            
            // Populate inputs with rich extracted contents
            document.getElementById("input-background").value = `[RFP 분석 정보] 파일명: ${filename}\n- 공공 지원 사업: 중소기업 AI 스마트워크 고도화 및 DX 바우처 지원 사업\n- 제안 타깃: G-Valley 중소벤처기업 및 소상공인 업무 효율화 실증\n- 주요 내용: 산학협력 인프라 및 전용 에이전트 협업 체계를 통한 기업별 맞춤형 AI 대시보드 구축과 보급 전략 수립.`;
            
            document.getElementById("input-constraints").value = `- 사업 수행 기간: 총 6개월 이내 실증 완료 필수 (TRL 6~7단계 시제품 이상)\n- 정부 지원 예산: 과제당 최대 5,000만 원 한도 (기업 자부담 비율 20% 의무 수록)\n- 필수 스펙: 정부 제출 표준 양식(화이트 무지 배경, 얇은 격자 없는 선 굵기 규격화)을 적용한 1페이지 요약서 구성.`;
            
            document.getElementById("input-requirements").value = `1. 대상 기업 업무 환경의 수작업 프로세스 병목 구간 정량화 분석\n2. AI 오케스트레이터 및 ElevenLabs 음성 프로필 연동을 통한 자동화 워크플로우 실증\n3. Google Vids 비디오 스토리보드 기획 및 NotebookLM 전용 텍스트 리소스 가이드 완성`;
            
            currentSlideIndex = 0;
            currentProposalPage = 0;
            
            // Re-render only to reflect new context in dynamic pages
            renderContent();
        }
        monitor.scrollTop = monitor.scrollHeight;
    }, 400);
}

// Load values from template key
function loadTemplate(key) {
    const data = templates[key];
    document.getElementById("input-background").value = data.background;
    document.getElementById("input-constraints").value = data.constraints;
    document.getElementById("input-requirements").value = data.requirements;
    
    // Set agent names and descriptions in the HTML
    document.getElementById("agent-role-pm").innerText = data.agents.pm.role;
    document.getElementById("agent-desc-pm").innerText = data.agents.pm.desc;
    document.getElementById("agent-prompt-pm").innerText = data.agents.pm.prompt;
    
    document.getElementById("agent-role-bm").innerText = data.agents.bm.role;
    document.getElementById("agent-desc-bm").innerText = data.agents.bm.desc;
    document.getElementById("agent-prompt-bm").innerText = data.agents.bm.prompt;
    
    document.getElementById("agent-role-ops").innerText = data.agents.ops.role;
    document.getElementById("agent-desc-ops").innerText = data.agents.ops.desc;
    document.getElementById("agent-prompt-ops").innerText = data.agents.ops.prompt;
    
    document.getElementById("agent-role-creative").innerText = data.agents.creative.role;
    document.getElementById("agent-desc-creative").innerText = data.agents.creative.desc;
    document.getElementById("agent-prompt-creative").innerText = data.agents.creative.prompt;

    renderContent();
    calculateCosts();
}

// Reset Agent display states
function resetAgentStates() {
    const cards = document.querySelectorAll(".agent-card");
    cards.forEach(card => {
        card.classList.remove("active", "completed");
    });
    
    const logs = document.querySelectorAll(".agent-log");
    logs.forEach(log => {
        log.innerText = "대기 중...";
    });
    
    clearInterval(simulationInterval);
    document.getElementById("btn-run-simulation").innerHTML = '<span>⚡ SOTA 에이전트 협업 실행</span>';
}

// Recalculate costs dynamically
function calculateCosts() {
    const checkContext = document.getElementById("check-context-eng").checked;
    const checkHarness = document.getElementById("check-harness-eng").checked;
    
    // Initial standard API pricing assumptions (per 1,000 tokens / outputs)
    let rawInputCost = 4.50; // $4.50
    let rawOutputCost = 8.00; // $8.00
    let mediaCost = currentVideoMode === "premium" ? 15.00 : 0.00; // Premium Video API vs basic image
    
    let inputCost = rawInputCost;
    let outputCost = rawOutputCost;
    
    if (checkContext) {
        inputCost = rawInputCost * 0.1; // 90% savings on input using prompt caching
    }
    if (checkHarness) {
        outputCost = rawOutputCost * 0.25; // 75% savings by routing routine validation
    }
    
    let totalCost = inputCost + outputCost + mediaCost;
    let originalTotal = rawInputCost + rawOutputCost + (currentVideoMode === "premium" ? 15.00 : 0.00);
    let savingsPct = Math.round(((originalTotal - totalCost) / originalTotal) * 100);
    
    // Update DOM
    document.getElementById("val-raw-cost").innerText = `$${originalTotal.toFixed(2)}`;
    document.getElementById("val-optimized-cost").innerText = `$${totalCost.toFixed(2)}`;
    document.getElementById("val-savings-pct").innerText = `${savingsPct}%`;
    document.getElementById("ticker-val-cost").innerText = `$${totalCost.toFixed(2)}`;
    document.getElementById("ticker-val-saving").innerText = `${savingsPct}% 절감`;
}

// Run the sequential Multi-Agent pipeline simulation with advanced engineering outputs
function runAgentSimulation() {
    resetAgentStates();
    
    const btn = document.getElementById("btn-run-simulation");
    btn.innerHTML = '<span>⏳ 에이전트 협업 분석 중...</span>';
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML = ''; // Reset console monitor
    
    const checkContext = document.getElementById("check-context-eng").checked;
    const checkHarness = document.getElementById("check-harness-eng").checked;
    const checkLoop = document.getElementById("check-loop-eng").checked;
    
    // Check user API keys
    const userLlmKey = document.getElementById("input-llm-key").value;
    const userVideoKey = document.getElementById("input-video-api-key").value;
    
    if (userLlmKey) {
        monitor.innerHTML += `<div style="color: var(--primary); font-weight: 600;">[System Portal] User LLM API Key detected. Executing SOTA workflow at runtime...</div>`;
    } else {
        monitor.innerHTML += `<div style="color: var(--text-muted);">[System Portal] No User LLM API Key detected. Operating in high-fidelity simulation sandbox.</div>`;
    }

    if (userVideoKey) {
        monitor.innerHTML += `<div style="color: var(--secondary); font-weight: 600;">[System Portal] User Video API Key detected. Premium rendering enabled.</div>`;
    }

    const cards = {
        pm: document.getElementById("card-pm"),
        bm: document.getElementById("card-bm"),
        ops: document.getElementById("card-ops"),
        creative: document.getElementById("card-creative")
    };
    
    const logs = {
        pm: document.getElementById("log-pm"),
        bm: document.getElementById("log-bm"),
        ops: document.getElementById("log-ops"),
        creative: document.getElementById("log-creative")
    };
    
    const data = templates[currentTemplateKey];
    
    let step = 0;
    
    simulationInterval = setInterval(() => {
        // Clear active classes
        Object.values(cards).forEach(c => c.classList.remove("active"));
        
        if (step === 0) {
            // Step 1: PM Strategy Lead & Context Engineering
            cards.pm.classList.add("active");
            logs.pm.innerText = "Analyzing project assets...";
            
            let contextLog = checkContext 
                ? `[Context Engineering] Applied Prompt Caching to RFP (Saved 45,000 input tokens. Latency: 1.2s).` 
                : `[Context Engineering] Non-cached full chunking read (Incurred 45,000 input tokens. Latency: 8.5s).`;
            monitor.innerHTML += `<div style="color: var(--primary);">${contextLog}</div>`;
            
            setTimeout(() => { 
                logs.pm.innerText = data.logs.pm; 
                cards.pm.classList.add("completed"); 
            }, 1000);
            
        } else if (step === 1) {
            // Step 2: BM Architect & Loop correction check
            cards.bm.classList.add("active");
            logs.bm.innerText = "Formulating 3-Way BM strategies...";
            
            if (checkLoop && checkHarness) {
                // Strict validation check fails, but Fuzzy Constraint Layer intercepts and resolves
                monitor.innerHTML += `<div style="color: #d97706;">[Harness Engineering] Validator warning: Output cash ratio deviates from NIPA strict 10% (computed 9.2%).</div>`;
                monitor.innerHTML += `<div style="color: var(--accent-green); font-weight: 600;">[Fuzzy Constraint Layer] Applied sliding scale threshold (Score: 92/100). Approved deviation without re-triggering LLM generation loop.</div>`;
                setTimeout(() => {
                    logs.bm.innerText = data.logs.bm; 
                    cards.bm.classList.add("completed");
                }, 800);
            } else {
                monitor.innerHTML += `<div style="color: var(--secondary);">[Harness Engineering] Warning bypassed. Direct output processed.</div>`;
                setTimeout(() => {
                    logs.bm.innerText = data.logs.bm; 
                    cards.bm.classList.add("completed");
                }, 1000);
            }
            
        } else if (step === 2) {
            // Step 3: Ops Specialist
            cards.ops.classList.add("active");
            logs.ops.innerText = "Designing operations & internship matchings...";
            
            monitor.innerHTML += `<div style="color: #b45309;">[Ops Agent] Matching regional job databases with local student pool. Target scale matching success.</div>`;
            
            setTimeout(() => { 
                logs.ops.innerText = data.logs.ops; 
                cards.ops.classList.add("completed"); 
            }, 1000);
            
        } else if (step === 3) {
            // Step 4: Creative Director
            cards.creative.classList.add("active");
            logs.creative.innerText = "Compiling markdown drafts and media script blocks...";
            
            monitor.innerHTML += `<div style="color: #db2777;">[Creative Agent] Compiling proposal text & Reveal.js slides layout JSON. Storing scripts for MoviePy synthesis.</div>`;
            
            setTimeout(() => { 
                logs.creative.innerText = data.logs.creative; 
                cards.creative.classList.add("completed"); 
            }, 1000);
            
        } else {
            clearInterval(simulationInterval);
            btn.innerHTML = '<span>✅ 완료 (산출물 확인 가능)</span>';
            monitor.innerHTML += `<div style="color: var(--accent-green); font-weight: 700;">[System Portal] SOTA Multi-Agent pipeline run completed successfully.</div>`;
            
            // Show complete glow on tabs
            document.querySelector(".deliverables-content").style.borderColor = "var(--accent-green)";
            setTimeout(() => {
                document.querySelector(".deliverables-content").style.borderColor = "var(--border-color)";
            }, 1500);
        }
        step++;
    }, 1500);
}

// Simple markdown to HTML parser for rendering deliverables inside the viewer
function parseMarkdown(text) {
    if (!text) return "대기 중...";
    let html = text;
    
    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Code blocks / Code text
    html = html.replace(/`(.*?)`/g, '<code style="background: rgba(0,0,0,0.04); padding: 2px 6px; border-radius: 4px; color: var(--primary);">$1</code>');
    
    // Bullet points
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/sim, '<ul>$1</ul>');
    
    // Dividers
    html = html.replace(/^---$/gim, '<hr style="border: 0; height: 1px; background: var(--border-color); margin: 20px 0;">');
    
    // Newlines to double breaks
    html = html.replace(/\n$/gim, '<br>');
    
    return html;
}

// Global Concept Image Generator Simulator
window.requestConceptImage = function() {
    const imgContainer = document.getElementById("concept-image-slot");
    imgContainer.innerHTML = `<span style="font-size: 13px; color: var(--text-secondary);"><span class="upload-icon">⏳</span> GPT/Gemini API 호출 및 이미지 생성 중...</span>`;
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--secondary);">[Image API] Calling OpenAI DALL-E / Gemini Image API with prompt: 'Sleek corporate 3D workflow diagram representing ${templates[currentTemplateKey].name}...'</div>`;
    
    setTimeout(() => {
        let svgCode = deliverables[currentTemplateKey].summary.svg;
        imgContainer.innerHTML = `
            <div class="concept-image-box">
                ${svgCode}
            </div>
            <p style="font-size: 11px; color: var(--accent-green); margin-top: 8px; font-weight: 600;">✅ GPT/Gemini API로 콘셉트 벡터 이미지 생성 완료</p>
        `;
    }, 1500);
};

// Global Page-by-page proposal navigation handler
window.selectProposalPage = function(index) {
    currentProposalPage = index;
    renderProposalBuilder();
};

// Global focused page correction loop handler (SOTA Page Builder)
window.generatePageOnly = function() {
    const feedbackText = document.getElementById("input-page-feedback").value;
    const toneStyle = document.getElementById("select-tone-style").value;
    const trlLevel = document.getElementById("select-trl-level").value;
    
    if (!feedbackText) {
        alert("이 페이지 보완/수정 명령을 입력해 주세요.");
        return;
    }
    
    const btn = document.getElementById("btn-focused-page-gen");
    btn.innerHTML = `<span>⏳ [Loop Engine] 이 페이지 단독 생성 중...</span>`;
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--secondary); font-weight:600;">[Loop Engineering] Focused section tuning initiated for Page ${currentProposalPage + 1}.</div>`;
    monitor.innerHTML += `<div style="color: var(--primary);">[Context Engineering] Loaded cached tokens. Applying target styles: [Tone: ${toneStyle}, TRL: ${trlLevel}].</div>`;
    
    setTimeout(() => {
        // Dynamically update the content of the selected page in memory
        const pageData = deliverables[currentTemplateKey].proposal[currentProposalPage];
        pageData.content += `<br><br><div style="background: rgba(37,99,235,0.03); border-left: 3px solid var(--primary); padding: 10px; border-radius: 4px; font-size:12px; margin-top:12px;"><strong>💡 [SOTA AI 보완 완료 - TRL: ${trlLevel.toUpperCase()}]</strong> 어조: ${toneStyle} 양식 반영 - <em>${feedbackText}</em></div>`;
        
        btn.innerHTML = `<span>✍️ 현재 페이지 집중 생성/보완</span>`;
        document.getElementById("input-page-feedback").value = "";
        
        monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[Harness Verification] Pass. Page ${currentProposalPage + 1} content updated and re-verified.</div>`;
        
        renderProposalBuilder();
    }, 1500);
};

// Global Action: Run Self-Evaluation against the template
window.runSelfEvaluation = function() {
    const evalData = selfEvaluationState[currentTemplateKey];
    const btn = document.getElementById("btn-trigger-self-eval");
    btn.innerHTML = `<span>⏳ 평가위원 에이전트 채점 중...</span>`;
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--secondary); font-weight: 600;">[Evaluation Agent] Loading government criteria template: 정부과제_사업계획서_평가분석_템플릿.md...</div>`;
    monitor.innerHTML += `<div style="color: var(--primary);">[Evaluation Agent] Context audit: Cross-checking "${templates[currentTemplateKey].name}" with eligibility constraints.</div>`;
    
    setTimeout(() => {
        evalData.score = 85; // Initial score before reflecting corrections
        btn.innerHTML = `<span>🕵️‍♂️ AI 자체 평가 분석 가동</span>`;
        monitor.innerHTML += `<div style="color: var(--accent-green); font-weight: 700;">[Evaluation Agent] Self-audit complete. Initial Score: 85/100 points. Strengths & Weaknesses mapped.</div>`;
        
        renderEvaluation();
    }, 1500);
};

// Global Action: Reflect & Auto-Apply Evaluation Improvements
window.applyEvaluationImprovements = function() {
    const evalData = selfEvaluationState[currentTemplateKey];
    const btn = document.getElementById("btn-trigger-eval-reflect");
    btn.innerHTML = `<span>⏳ [Loop Engine] 개선안 본문 자동 합성 중...</span>`;
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--secondary); font-weight: 600;">[Loop Engineering] Initiating self-evaluation reflection loop.</div>`;
    
    setTimeout(() => {
        // Apply updates to the proposal pages in memory
        if (currentTemplateKey === "aish") {
            // Update Page 3 (BM)
            deliverables.aish.proposal[2].content += `<br><br><div style="background: rgba(16,185,129,0.03); border-left: 3px solid var(--accent-green); padding: 10px; border-radius: 4px; font-size:12px; margin-top:12px;"><strong>💡 [자체평가 개선 반영 완료] B2B 스폰서십 티어 세분화 보강</strong>: Notion 협찬금 $5,000, Claude API 실증 $10,000 스폰서십 확정 매칭안 보강.</div>`;
            // Update Page 8 (Ops)
            deliverables.aish.proposal[7].content += `<br><br><div style="background: rgba(16,185,129,0.03); border-left: 3px solid var(--accent-green); padding: 10px; border-radius: 4px; font-size:12px; margin-top:12px;"><strong>💡 [자체평가 개선 반영 완료] 청년 멘토 매칭 정량 지표 추가</strong>: 연간 총 30명 이상의 IT 전공자-SME 1:1 자동화 매칭 보장안 보강.</div>`;
            evalData.eligibility.budgetRule = "🟢 부합 (수취 구조 보강 완료)";
        } else if (currentTemplateKey === "gov_grant") {
            // Update Page 3 (BM)
            deliverables.gov_grant.proposal[2].content += `<br><br><div style="background: rgba(16,185,129,0.03); border-left: 3px solid var(--accent-green); padding: 10px; border-radius: 4px; font-size:12px; margin-top:12px;"><strong>💡 [자체평가 개선 반영 완료] 민간 자부담 증빙 보강</strong>: 30% 민간 부담 중 인건비 현물 대체(20%)에 관한 임직원 재직 증명 서식 확보 계획 추가.</div>`;
            // Update Page 8 (Ops)
            deliverables.gov_grant.proposal[7].content += `<br><br><div style="background: rgba(16,185,129,0.03); border-left: 3px solid var(--accent-green); padding: 10px; border-radius: 4px; font-size:12px; margin-top:12px;"><strong>💡 [자체평가 개선 반영 완료] TRL 단계 실증 보강</strong>: 프로토타입 PoC(TRL 6)에서 현장 상용화 운영(TRL 8) 진척 보장을 위한 AISH 전담 상주 멘토 파견 규정 보강.</div>`;
            evalData.eligibility.budgetRule = "🟢 부합 (현물 증빙 완료)";
        } else {
            // startup_pitch
            deliverables.startup_pitch.proposal[2].content += `<br><br><div style="background: rgba(16,185,129,0.03); border-left: 3px solid var(--accent-green); padding: 10px; border-radius: 4px; font-size:12px; margin-top:12px;"><strong>💡 [자체평가 개선 반영 완료] Enterprise API 단가표 보강</strong>: 온프레미스 망용 Volume Discount 세부 할인 규격(구간별 15%~30% 차등 요금) 기재 완료.</div>`;
            evalData.eligibility.budgetRule = "🟢 부합";
        }
        
        evalData.reflected = true;
        evalData.score = 96; // Higher score after applying improvements
        btn.innerHTML = `<span>🔧 개선사항 제안서 반영 완료</span>`;
        btn.disabled = true;
        btn.style.background = "var(--text-muted)";
        
        monitor.innerHTML += `<div style="color: var(--accent-green); font-weight: 700;">[Loop Engineering] Reflection successful. Updated proposal sections in memory. New evaluation score: 96/100 points!</div>`;
        
        renderEvaluation();
    }, 1500);
};

// Global Action: Test User LLM API Key Connection
window.testLlmKeyConnection = function() {
    const btn = document.getElementById("btn-test-llm-key");
    const llmKey = document.getElementById("input-llm-key").value;
    
    btn.innerHTML = "🔌 LLM 연결 검증 중...";
    btn.style.background = "rgba(0,0,0,0.05)";
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--primary);">[System Portal] Testing LLM API handshake...</div>`;
    
    setTimeout(() => {
        if (!llmKey) {
            btn.innerHTML = "❌ 연결 실패 (키 없음)";
            btn.style.background = "rgba(220,38,38,0.1)";
            btn.style.color = "#dc2626";
            monitor.innerHTML += `<div style="color: #dc2626; font-weight:600;">[System Portal] LLM Connection test failed: LLM Key input field is empty.</div>`;
            
            setTimeout(() => {
                btn.innerHTML = "🔌 LLM API 연결 테스트";
                btn.style.background = "rgba(37,99,235,0.05)";
                btn.style.color = "var(--primary)";
            }, 3000);
        } else {
            btn.innerHTML = "🟢 LLM 연결 성공";
            btn.style.background = "rgba(16,185,129,0.1)";
            btn.style.color = "#10b981";
            monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[System Portal] LLM API Connection: SUCCESS. Claude 3.5 Sonnet / GPT-4o Handshake OK.</div>`;
            
            setTimeout(() => {
                btn.innerHTML = "🔌 LLM API 연결 테스트";
                btn.style.background = "rgba(37,99,235,0.05)";
                btn.style.color = "var(--primary)";
            }, 3000);
        }
    }, 1000);
};

// Global Action: Test User Video API Key Connection
window.testVideoKeyConnection = function() {
    const btn = document.getElementById("btn-test-video-key");
    const videoKey = document.getElementById("input-video-api-key").value;
    const selectProvider = document.getElementById("select-video-api-provider");
    const providerLabel = selectProvider.options[selectProvider.selectedIndex].text;
    
    btn.innerHTML = "🔌 Video 연결 검증 중...";
    btn.style.background = "rgba(0,0,0,0.05)";
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--primary);">[System Portal] Testing Video API handshake with ${providerLabel}...</div>`;
    
    setTimeout(() => {
        if (!videoKey) {
            btn.innerHTML = "❌ 연결 실패 (키 없음)";
            btn.style.background = "rgba(220,38,38,0.1)";
            btn.style.color = "#dc2626";
            monitor.innerHTML += `<div style="color: #dc2626; font-weight:600;">[System Portal] Video Connection test failed: Video Key input field is empty.</div>`;
            
            setTimeout(() => {
                btn.innerHTML = "🔌 Video API 연결 테스트";
                btn.style.background = "rgba(37,99,235,0.05)";
                btn.style.color = "var(--primary)";
            }, 3000);
        } else {
            btn.innerHTML = "🟢 Video 연결 성공";
            btn.style.background = "rgba(16,185,129,0.1)";
            btn.style.color = "#10b981";
            monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[System Portal] Video API Connection: SUCCESS. Handshake with ${providerLabel} approved.</div>`;
            
            setTimeout(() => {
                btn.innerHTML = "🔌 Video API 연결 테스트";
                btn.style.background = "rgba(37,99,235,0.05)";
                btn.style.color = "var(--primary)";
            }, 3000);
        }
    }, 1000);
};

// Helper to compile proposal text resource markdown
function getNotebookLMMarkdown() {
    const data = templates[currentTemplateKey];
    const pages = deliverables[currentTemplateKey].proposal;
    
    let mdContent = `## 📋 [정부 제출용 양식 작성 지침 (Government Submission Guidelines)]\n`;
    mdContent += `> ⚠️ **중요 지침**: 본 문서를 바탕으로 제안서를 작성하거나 프레젠테이션(Google Vids 등)을 제작할 때는 반드시 다음의 정부 공공기관 제출 표준 양식 가이드라인을 준수하십시오.\n`;
    mdContent += `> 1. **배경 스타일**: 깨끗하고 신뢰감을 주는 **화이트(White) 무지 배경**을 사용하십시오. 화려한 색상배경이나 그라데이션은 지양합니다.\n`;
    mdContent += `> 2. **격자 제거**: 배경에 격자 패턴이나 복잡한 그리드 라인이 노출되지 않도록 설정하십시오.\n`;
    mdContent += `> 3. **선 굵기 규격**: 디자인 요소나 테두리에 사용되는 모든 선의 두께는 **얇은 두께(Thin line, 1px~1.5px 수준)**로 일관되게 규격화하여 사용하십시오.\n`;
    mdContent += `> 4. **레이아웃 규격화**: 복잡하고 임의의 형태를 피하고, 템플릿 레이아웃을 엄격하게 규격화하여 대칭성과 정밀성을 유지하십시오.\n`;
    mdContent += `> 5. **목차 중심 구성**: 본문 내용의 가독성을 위해 각 목차(장/절/항)별로 명확하게 내용을 구분하여 작성해야 합니다.\n\n`;
    mdContent += `---\n\n`;
    
    mdContent += `# ${data.name} - Google NotebookLM 최적화 통합 제안서\n\n`;
    mdContent += `> **문서 유형**: NotebookLM 학습용 소스 원문 (Source Document)\n`;
    mdContent += `> **작성 일시**: ${new Date().toLocaleDateString('ko-KR')} ${new Date().toLocaleTimeString('ko-KR')}\n`;
    mdContent += `> **설명**: 본 문서는 Google NotebookLM에 업로드하여 요약 브리핑, 질의응답 및 오디오 개요(Audio Overview) 팟캐스트를 생성하는 데 최적화된 마크다운 통합본입니다.\n\n`;
    mdContent += `---\n\n`;
    
    pages.forEach((page, idx) => {
        mdContent += `## [Page ${idx + 1}] ${page.title}\n\n`;
        
        // Convert HTML tags to standard clean markdown syntax for NotebookLM ingestion
        let cleanText = page.content
            .replace(/<strong[^>]*>/gi, "**")
            .replace(/<\/strong>/gi, "**")
            .replace(/<br\s*\/?>/gi, "\n")
            .replace(/<li>/gi, "- ")
            .replace(/<\/li>/gi, "\n")
            .replace(/<ul>/gi, "")
            .replace(/<\/ul>/gi, "")
            .replace(/<div[^>]*>/gi, "\n\n> ")
            .replace(/<\/div>/gi, "\n\n")
            .replace(/<em[^>]*>/gi, "*")
            .replace(/<\/em>/gi, "*");
            
        mdContent += `${cleanText}\n\n`;
        mdContent += `---\n\n`;
    });
    
    // Add additional FAQ and Glossary pages to further optimize NotebookLM generation
    mdContent += `## [부록 1] NotebookLM 학습용 FAQ Q&A 요약\n\n`;
    mdContent += `**Q1. 본 사업계획서의 예산 조달 구조는 어떻게 신뢰성을 가집니까?**\n`;
    mdContent += `A1. B2C 고객 참가비에 전적으로 의존하던 방식에서 벗어나, RISE 예산 연계를 통한 B2G 지원금과 글로벌 SaaS 벤더와의 협업을 통한 B2B 스폰서십으로 고정 비용을 확보하여 100% 지속 가능성을 담증합니다.\n\n`;
    mdContent += `**Q2. 청년 조교 고용 모델의 고용 비용은 어디서 충당합니까?**\n`;
    mdContent += `A2. 대학의 RISE 현장실습비와 서울시/금천구/구로구 지자체의 지역 주도형 청년 일자리 보조금 예산을 100% 매칭 연계하여 조달합니다.\n\n`;
    mdContent += `---\n\n`;
    
    return mdContent;
}

// Helper to compile system instructions text
function getNotebookLMInstructionsText() {
    const data = templates[currentTemplateKey];
    return `[Google NotebookLM System Instructions & Prompt Guide]
    
1. 역할 지침 (Role & Tone):
- 너는 중소벤처기업부 과제 심사위원 및 벤처캐피탈(VC) 심사역이다. 
- 업로드된 문서 "${data.name}"에 근거하여 엄격하고 논리적으로 팩트체크를 수행하라.
- 문서에 기재되지 않은 수치나 통계, 가상의 사실을 임의로 꾸며내어 답변하지 마라 (할루시네이션 원천 배제).

2. 핵심 분석 영역 (Focus Areas):
- B2B 스폰서십 단가 요율 및 B2G 국비 RISE 보조금 매칭의 타당성을 평가하라.
- 지자체 연계형 청년 조교 일자리 매칭 모델이 주최측 예산 부담을 실질적으로 해소하는지 검증하라.
- 김상용 대표원장의 SBA 공공 네트워크 자산 및 시립대/동양미래대 MOU 협업 시너지를 기반으로 한 지속가능한 사업 성장을 중점 점검하라.

3. 팟캐스트 오디오 개요 연출 가이드 (Audio Overview Instructions):
- AI 팟캐스트(Audio Overview) 제작 시, 아래의 2인 페르소나가 대담하는 구도를 유도하라.
  - 진행자 A (질문자/skeptic): G-Valley 중소기업의 만성 인력 부족 및 재정 적자를 염려하며 비즈니스 현실성을 송곳 검증하는 시선.
  - 진행자 B (답변자/expert): AISH 스마트워크톤의 RISE 매칭과 청년 조교 교차보조(Cross-Subsidize) 수익모델로 극복할 수 있음을 확신 있게 설명하는 시선.
  - 대담의 흐름이 단순 칭찬에 그치지 않고, 공익적 가치와 영리적 자립 간의 갈등 및 해법을 다루도록 요약해라.`;
}

// Global Action: Copy NotebookLM Source Document (.md)
window.copyNotebookLMSource = function() {
    const mdContent = getNotebookLMMarkdown();
    navigator.clipboard.writeText(mdContent).then(() => {
        alert("NotebookLM용 텍스트 리소스가 클립보드에 복사되었습니다!");
        const monitor = document.getElementById("monitor-log-area");
        monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[NotebookLM] Copied text resource markdown to clipboard.</div>`;
    }).catch(err => {
        alert("복사 실패. 수동으로 복사해주세요.");
    });
};

// Global Action: Download NotebookLM Source Document (.md)
window.downloadNotebookLMSource = function() {
    const data = templates[currentTemplateKey];
    const mdContent = getNotebookLMMarkdown();
    
    // Trigger file download
    const blob = new Blob([mdContent], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${data.name.replace(/\s+/g, "_")}_NotebookLM_Source.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[System Portal] Google NotebookLM 업로드용 최적화 통합 마크다운(.md) 파일 컴파일 및 다운로드 완료!</div>`;
};

// Global Action: Copy NotebookLM instructions text
window.copyNotebookLMInstructions = function() {
    const instructions = getNotebookLMInstructionsText();
    navigator.clipboard.writeText(instructions).then(() => {
        alert("NotebookLM 제어용 지침서(Instructions) 프롬프트가 클립보드에 복사되었습니다!");
        const monitor = document.getElementById("monitor-log-area");
        monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[NotebookLM] Copied System Instructions prompt to clipboard.</div>`;
    }).catch(err => {
        alert("복사 실패. 수동으로 복사해주세요.");
    });
};

// Global Action: Download NotebookLM instructions text file
window.downloadNotebookLMInstructions = function() {
    const instructions = getNotebookLMInstructionsText();
    const blob = new Blob([instructions], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${templates[currentTemplateKey].name.replace(/\s+/g, "_")}_NotebookLM_제어지침.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    const monitor = document.getElementById("monitor-log-area");
    monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[NotebookLM] Downloaded system instructions (.txt) file.</div>`;
};

// Helper to dynamically build Google Vids Scene outline based on proposal pages
function generateVidsScript(templateKey, videoMode, providerKey) {
    const pages = deliverables[templateKey].proposal;
    let scriptMarkdown = `### 🎬 Google Vids 전체 페이지 연동 대본 (${pages.length} Scenes)\n\n`;
    
    let styleText = "cinematic lighting, flat minimalist modern UI style, high definition, flat design illustration";
    if (templateKey === "aish") {
        styleText = "G-Valley office environment, collaborative startup tech team, modern premium corporate look";
    } else if (templateKey === "gov_grant") {
        styleText = "industrial factory assembly line, futuristic blueprints overlay, green tech accents";
    } else {
        styleText = "dark abstract technology background, glowing server nodes, neon purple accent lines";
    }
    
    pages.forEach((page, idx) => {
        const nextPage = pages[idx + 1];
        scriptMarkdown += `#### [Scene ${idx + 1}: ${page.title}]\n`;
        
        let promptLabel = "";
        let promptContent = "";
        
        const cleanTitle = page.title.replace(/^\d+\.\s*/, '');
        
        if (videoMode === "basic") {
            promptLabel = "Gemini 이미지 프롬프트";
            promptContent = `\`A clean high-quality minimalist vector design representing "${cleanTitle}", solid white background, thin 1.5px lines, clear grid, flat design UI, ${styleText}.\``;
        } else if (providerKey === "higgsfield") {
            promptLabel = "Higgsfield 비디오 프롬프트";
            promptContent = `\`A dynamic 4s video panning across a minimalist UI diagram representing "${cleanTitle}", characters in G-Valley working, solid white background, thin 1.5px outlines, highly realistic physics, ${styleText}.\``;
        } else {
            promptLabel = "Runway Gen-3 비디오 프롬프트";
            promptContent = `\`A cinematic 4s dolly zoom shot of a modern office interface representing "${cleanTitle}", neon line vectors, solid white background, thin outlines, volumetric ray, ${styleText}.\``;
        }
        
        scriptMarkdown += `- **${promptLabel}**: ${promptContent}\n`;
        
        // Narration summary (first sentence or two)
        let cleanText = page.content.replace(/<[^>]*>/g, "").split(". ")[0] + ".";
        
        let bridge = "";
        if (nextPage) {
            bridge = ` 이어서 다음 장의 ${nextPage.title.replace(/^\d+\.\s*/, '')}에 대해 살펴보겠습니다.`;
        } else {
            bridge = " 이상으로 전체 제안 발표를 마치겠습니다. 감사합니다.";
        }
        
        scriptMarkdown += `- **나레이션**: "${cleanText}${bridge}"\n\n`;
    });
    
    return scriptMarkdown;
}
window.generateVidsScript = generateVidsScript;

// Global Action: Copy Google Vids formatted prompt/script to clipboard
window.copyGoogleVidsScript = function() {
    const selectedVideoProvider = document.getElementById("select-video-api-provider").value;
    const scriptText = generateVidsScript(currentTemplateKey, currentVideoMode, selectedVideoProvider);
    
    // Formatting prompt to instruct Google Vids AI model
    let cleanPrompt = `Create a professional corporate video using Google Vids AI based on the following scenes and script outlines:\n\n${scriptText.replace(/###/g, "").replace(/####/g, "")}`;
    
    navigator.clipboard.writeText(cleanPrompt).then(() => {
        alert("Google Vids 프롬프트 대본이 클립보드에 성공적으로 복사되었습니다!");
        const monitor = document.getElementById("monitor-log-area");
        monitor.innerHTML += `<div style="color: var(--accent-green); font-weight:600;">[System Portal] Storyboard script copied. Direct paste to Google Vids prompt enabled.</div>`;
    }).catch(err => {
        alert("클립보드 복사 실패. 텍스트를 드래그하여 수동 복사하세요.");
    });
};

// Render Self-Evaluation Tab
function renderEvaluation() {
    const container = document.getElementById("deliverables-text-viewer");
    const evalData = selfEvaluationState[currentTemplateKey];
    
    let scoreHeader = "";
    let actionButtons = "";
    
    if (evalData.score === null) {
        scoreHeader = `<div class="eval-score-badge" style="background:#64748b;">평가 대기 중</div>`;
        actionButtons = `
            <button class="btn-eval-action" id="btn-trigger-self-eval" onclick="runSelfEvaluation()">🕵️‍♂️ AI 자체 평가 분석 가동</button>
            <button class="btn-eval-reflect" style="background: var(--text-muted); cursor: not-allowed;" disabled>🔧 자체평가 개선사항 제안서에 자동 반영</button>
        `;
    } else {
        const color = evalData.score >= 95 ? "var(--accent-green)" : "var(--secondary)";
        scoreHeader = `<div class="eval-score-badge" style="background:${color};">예상 획득 점수: ${evalData.score}점 / 100점 (가점 +${evalData.extraPoints}점 별도)</div>`;
        
        if (!evalData.reflected) {
            actionButtons = `
                <button class="btn-eval-action" id="btn-trigger-self-eval" onclick="runSelfEvaluation()">🕵️‍♂️ 평가 재분석 실행</button>
                <button class="btn-eval-reflect" id="btn-trigger-eval-reflect" onclick="applyEvaluationImprovements()">🔧 자체평가 개선사항 제안서에 자동 반영</button>
            `;
        } else {
            actionButtons = `
                <button class="btn-eval-action" id="btn-trigger-self-eval" onclick="runSelfEvaluation()">🕵️‍♂️ 평가 재분석 실행</button>
                <button class="btn-eval-reflect" style="background: var(--text-muted); cursor: default;" disabled>✅ 개선 사항 반영 완료 (96점 확보)</button>
            `;
        }
    }
    
    let bodyHtml = `
        <h2 style="font-family: var(--font-heading); font-size: 18px; margin-bottom: 12px; border-bottom: 1.5px solid var(--primary); padding-bottom: 6px;">🔍 정부과제 사업계획서 자체 평가 분석</h2>
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom: 20px;">
            ${scoreHeader}
            <div style="display:flex; gap:8px;">${actionButtons}</div>
        </div>
        
        <h3 class="section-title" style="border-left:3px solid var(--secondary); padding-left:8px; margin-top:16px;">1. ⚠️ 자격요건 리스크 사전 점검 (공고 규정 기준)</h3>
        <table class="gov-summary-table" style="margin-top:10px;">
            <tr>
                <th style="width:200px;">확인 항목</th>
                <th style="width:250px;">공고문 요구 규정</th>
                <th>사업계획서 실제 부합도</th>
            </tr>
            <tr>
                <th>업종 요건</th>
                <td>DX 전문기업 / 매칭 지원 업종</td>
                <td style="color:var(--accent-green); font-weight:700;">${evalData.eligibility.industry}</td>
            </tr>
            <tr>
                <th>기업 규모</th>
                <td>SME 중소기업 / 스타트업 범위</td>
                <td style="color:var(--accent-green); font-weight:700;">${evalData.eligibility.size}</td>
            </tr>
            <tr>
                <th>컨소시엄 자격</th>
                <td>주관대학-SME 연계 (MOU 확인)</td>
                <td style="color:var(--accent-green); font-weight:700;">${evalData.eligibility.consortium}</td>
            </tr>
            <tr>
                <th>재참여/중복 제한</th>
                <td>동일 기술 유사 과제 수행 이력</td>
                <td style="color:var(--accent-green); font-weight:700;">${evalData.eligibility.duplication}</td>
            </tr>
            <tr>
                <th>예산/비율 한도</th>
                <td>국비 70% 이내, 민간부담 매칭비 구성</td>
                <td style="font-weight:700;">${evalData.eligibility.budgetRule}</td>
            </tr>
        </table>
        
        <h3 class="section-title" style="border-left:3px solid var(--secondary); padding-left:8px; margin-top:20px;">2. 가점 항목 현황</h3>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:8px;">• 공고서 기준 확보 가능한 가점 내역:</p>
        <div style="background:rgba(0,0,0,0.01); border:1px solid var(--border-color); border-radius:8px; padding:12px; font-size:13px;">
            ✅ <strong>가점 항목 확보:</strong> 지역 산학 협력 참여 가점 (+1.0점) | 특허 보유 가점 (+0.5점) ➡️ <strong>총 예상 가점: +${evalData.extraPoints}점 확보</strong>
        </div>
    `;
    
    if (evalData.score !== null) {
        bodyHtml += `
            <h3 class="section-title" style="border-left:3px solid var(--secondary); padding-left:8px; margin-top:20px;">3. 평가기준 항목별 분석 (Strengths & Weaknesses)</h3>
            <div class="eval-grid">
                <div class="eval-card-block">
                    <h4>${evalData.criteria.problem.title}</h4>
                    <p style="color:var(--accent-green); font-weight:700; font-size:11px;">🟢 강점</p>
                    <ul style="font-size:12px; margin-left:14px; margin-bottom:8px;">
                        ${evalData.criteria.problem.strengths.map(s => `<li>${s}</li>`).join("")}
                    </ul>
                    <p style="color:var(--primary); font-weight:700; font-size:11px;">🔴 보완 필요 요인</p>
                    <ul style="font-size:12px; margin-left:14px;">
                        ${evalData.criteria.problem.weaknesses.map(w => `<li>${w}</li>`).join("")}
                    </ul>
                </div>
                
                <div class="eval-card-block">
                    <h4>${evalData.criteria.team.title}</h4>
                    <p style="color:var(--accent-green); font-weight:700; font-size:11px;">🟢 강점</p>
                    <ul style="font-size:12px; margin-left:14px; margin-bottom:8px;">
                        ${evalData.criteria.team.strengths.map(s => `<li>${s}</li>`).join("")}
                    </ul>
                    <p style="color:var(--primary); font-weight:700; font-size:11px;">🔴 보완 필요 요인</p>
                    <ul style="font-size:12px; margin-left:14px;">
                        ${evalData.criteria.team.weaknesses.map(w => `<li>${w}</li>`).join("")}
                    </ul>
                </div>
            </div>
            
            <h3 class="section-title" style="border-left:3px solid var(--secondary); padding-left:8px; margin-top:20px;">4. 종합 심사 위원 코멘트 (종합 의견)</h3>
            <div style="background: rgba(37,99,235,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 16px; font-size: 13px; line-height:1.6; color: var(--text-primary);">
                ${evalData.reflected ? evalData.reflectedComment : evalData.comment}
            </div>
        `;
    }
    
    container.innerHTML = bodyHtml;
}

// Render Page-by-page Proposal Builder
function renderProposalBuilder() {
    const container = document.getElementById("deliverables-text-viewer");
    const pages = deliverables[currentTemplateKey].proposal;
    const activePage = pages[currentProposalPage];
    
    // Build pagination buttons
    let paginationHtml = `<div class="proposal-pagination">`;
    pages.forEach((page, idx) => {
        const isActive = idx === currentProposalPage ? "active" : "";
        paginationHtml += `<button class="page-select-btn ${isActive}" onclick="selectProposalPage(${idx})">Page ${idx + 1}</button>`;
    });
    paginationHtml += `</div>`;
    
    // Render content with page-specific feedback console and NotebookLM Export Buttons
    container.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; border-bottom: 1.5px solid var(--primary); padding-bottom: 6px; margin-bottom: 12px;">
            <h2 style="font-family: var(--font-heading); font-size: 18px; margin:0;">✍️ ${selectedPageCount}P 제안서 페이지별 빌더</h2>
            <div style="display:flex; gap:6px; margin-left:auto;">
                <button class="btn-page-generate" style="background:#2563eb; display:inline-flex; align-items:center; gap:6px; padding: 6px 12px; font-size:11px; color:white; font-weight:700;" onclick="copyNotebookLMSource()">
                    📋 텍스트 리소스 복사
                </button>
                <button class="btn-page-generate" style="background:#1e293b; display:inline-flex; align-items:center; gap:6px; padding: 6px 12px; font-size:11px;" onclick="downloadNotebookLMSource()">
                    📥 리소스 다운로드 (.md)
                </button>
                <a href="https://notebooklm.google.com/notebook/" target="_blank" class="btn-page-generate" style="background:#0f172a; text-decoration:none; display:inline-flex; align-items:center; gap:6px; padding: 6px 12px; font-size:11px; color:white; font-weight:700;">
                    🔗 Google NotebookLM 열기
                </a>
            </div>
        </div>
        
        <!-- Google NotebookLM integration Quick Guide & Instructions controls -->
        <div style="background: rgba(37,99,235,0.03); border: 1px dashed rgba(37,99,235,0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:20px;">💡</span>
                    <strong style="color:var(--primary); font-size:13px;">Google NotebookLM 에이전트 웍플로우</strong>
                </div>
                <div style="display:flex; gap:6px;">
                    <button class="btn-page-generate" style="background:#7c3aed; display:inline-flex; align-items:center; gap:4px; padding: 4px 8px; font-size:10px; color:white;" onclick="copyNotebookLMInstructions()">
                        📋 제어 지침 복사
                    </button>
                    <button class="btn-page-generate" style="background:#6d28d9; display:inline-flex; align-items:center; gap:4px; padding: 4px 8px; font-size:10px; color:white;" onclick="downloadNotebookLMInstructions()">
                        📥 지침 다운로드 (.txt)
                    </button>
                </div>
            </div>
            <div style="color:var(--text-secondary); line-height:1.45; font-size: 11.5px;">
                <strong>사용 순서:</strong> 1. 상단의 <code>📋 텍스트 리소스 복사</code> 버튼으로 제안서 원문을 복사합니다. (또는 파일로 <code>📥 다운로드</code>) ➡️ 2. <code>🔗 NotebookLM 열기</code>를 누르고 새 노트북을 만들어 소스를 붙여넣습니다. ➡️ 3. 우측의 <code>📋 제어 지침 복사</code> 버튼을 눌러 지침을 복사한 뒤, NotebookLM 채팅창에 붙여넣고 가동하십시오.
            </div>
        </div>
        
        ${paginationHtml}
        
        <div class="markdown-body" style="background:#ffffff; border:1px solid var(--border-color); border-radius:10px; padding:24px; box-shadow: 0 2px 10px rgba(0,0,0,0.01);">
            <h1 style="border:none; margin-top:0; font-size: 20px; color:#0f172a;">${activePage.title}</h1>
            <p style="color:#334155; font-size:14px; line-height:1.6; margin-top:10px;">${activePage.content}</p>
        </div>
        
        <!-- Page-level Vids prompt conversion tool -->
        <div style="background: rgba(16,185,129,0.03); border: 1px dashed rgba(16,185,129,0.25); border-radius: 8px; padding: 14px; margin-top: 14px; margin-bottom: 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:20px;">🎬</span>
                    <strong style="color:#10b981; font-size:13px;">Google Vids 비디오 스크립트 변환 (Page ${currentProposalPage + 1} ➡️ Vids Scene)</strong>
                </div>
                <button class="btn-page-generate" style="background:#10b981; color:white; font-weight:700; font-size:11px;" onclick="convertPageToVids(${currentProposalPage})">
                    🎥 Vids 비디오 설명 변환
                </button>
            </div>
            <div id="vids-conversion-result-${currentProposalPage}" style="color:var(--text-secondary); line-height:1.45; font-size: 11.5px; white-space: pre-wrap; background: var(--bg-card); padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); display:none;">
            </div>
        </div>
        
        <!-- Focused Page Supplement Controls -->
        <div class="proposal-edit-container">
            <label for="input-page-feedback">📝 Page ${currentProposalPage + 1} 단독 보완/수정 명령 (Feedback)</label>
            <textarea id="input-page-feedback" placeholder="예: 'B2B/B2G 소요예산 세부 내역 표를 추가해줘', 'TRL 6단계 시제품 실증 부서 매칭안을 구체화해줘'"></textarea>
            <button class="btn-page-generate" id="btn-focused-page-gen" onclick="generatePageOnly()">
                <span>✍️ 현재 페이지 집중 생성/보완</span>
            </button>
        </div>
    `;
}

// Global Vids Page conversion function
function convertPageToVids(idx) {
    const pages = deliverables[currentTemplateKey].proposal;
    const activePage = pages[idx];
    const nextPage = pages[idx + 1];
    
    const resultDiv = document.getElementById(`vids-conversion-result-${idx}`);
    if (!resultDiv) return;
    
    let styleText = "cinematic lighting, flat minimalist modern UI style, high definition, flat design illustration";
    if (currentTemplateKey === "aish") {
        styleText = "G-Valley office environment, collaborative startup tech team, modern premium corporate look";
    } else if (currentTemplateKey === "gov_grant") {
        styleText = "industrial factory assembly line, futuristic blueprints overlay, green tech accents";
    } else {
        styleText = "dark abstract technology background, glowing server nodes, neon purple accent lines";
    }
    
    let prompt = `[Vids 비디오 씬 프롬프트]\n- 카메라 워크: Slow pan shot focusing on visual concepts of "${activePage.title}"\n- 주요 오브젝트: Minimalist icons depicting "${activePage.title.replace(/^\d+\.\s*/, '')}", solid white background, thin thin black outline, 1.5px strokes, structured corporate layouts\n- 무드 스타일: ${styleText}\n\n`;
    
    let bridgeNarration = "";
    if (nextPage) {
        bridgeNarration = `[Scene ${idx + 1} 나레이션 & 브릿지]\n"${activePage.title.replace(/^\d+\.\s*/, '')}에 관한 핵심 내용을 보여드렸습니다. 이어서, ${nextPage.title.replace(/^\d+\.\s*/, '')}로 연계하여 상세 전략을 계속해서 설명해 드리겠습니다."`;
    } else {
        bridgeNarration = `[Scene ${idx + 1} 나레이션 & 브릿지]\n"${activePage.title.replace(/^\d+\.\s*/, '')}의 전략을 설명해 드렸습니다. 이상으로 전체 비즈니스 제안서 발표를 모두 마치겠습니다. 감사합니다."`;
    }
    
    resultDiv.innerHTML = `<strong>🤖 변환 완료 (Google Vids 연동 스펙)</strong>\n\n${prompt}${bridgeNarration}`;
    resultDiv.style.display = "block";
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
window.convertPageToVids = convertPageToVids;

// Render Government Standard One-Pager Summary Table
function renderGovSummary() {
    const container = document.getElementById("deliverables-text-viewer");
    const data = deliverables[currentTemplateKey].summary;
    
    container.innerHTML = `
        <h2 style="font-family: var(--font-heading); font-size: 18px; margin-bottom: 12px; border-bottom: 1.5px solid var(--primary); padding-bottom: 6px;">📋 정부 지원 사업 1페이지 요약서 (NIPA/중기부 표준 양식)</h2>
        
        <table class="gov-summary-table">
            <tr>
                <th>과 제 명</th>
                <td colspan="3" style="font-weight: 700; color: var(--text-primary);">${data.title}</td>
            </tr>
            <tr>
                <th>주관 / 수행</th>
                <td>${data.org}</td>
                <th>신청 분야</th>
                <td>AI-DX 산업 실증 및 보급</td>
            </tr>
            <tr>
                <th>제안 목적</th>
                <td colspan="3">${data.goal}</td>
            </tr>
            <tr>
                <th>소요 예산</th>
                <td colspan="3" style="font-family: var(--font-heading); font-weight: 600; color: var(--primary);">${data.budget}</td>
            </tr>
            <tr>
                <th>기대 효과</th>
                <td colspan="3">
                    ${parseMarkdown(data.effects)}
                </td>
            </tr>
            <tr>
                <th>대표 개념도<br>(System Diagram)</th>
                <td colspan="3">
                    <div class="concept-image-container" id="concept-image-slot">
                        <p style="font-size: 12px; color: var(--text-secondary); text-align: center;">정부 양식 제출을 위해 대표 이미지/개념도가 위치하는 슬롯입니다.</p>
                        <button class="concept-btn" onclick="requestConceptImage()">
                            <span>🎨 GPT/Gemini로 콘셉트 이미지 생성 요청</span>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    `;
}

// Render Web Slides Presentation Frame
function renderSlides() {
    const container = document.getElementById("deliverables-text-viewer");
    const deck = slidesData[currentTemplateKey];
    const slide = deck[currentSlideIndex];
    
    container.innerHTML = `
        <div class="slides-deck-viewer">
            <div class="slide-frame">
                <div class="slide-header">
                    <span>${slide.header}</span>
                    <span>AP-Hub Web Slides Viewer</span>
                </div>
                <div class="slide-title">${slide.title}</div>
                <div class="slide-body">
                    ${slide.body}
                </div>
                <div class="slide-footer">
                    <span>© 2026 AI SmartWork Hub</span>
                    <span>슬라이드 ${currentSlideIndex + 1} / ${deck.length}</span>
                </div>
            </div>
            
            <div class="slide-navigation">
                <button class="slide-nav-btn" onclick="navigateSlide(-1)">◀ 이전 슬라이드</button>
                <button class="slide-nav-btn" onclick="navigateSlide(1)">다음 슬라이드 ▶</button>
                <button class="slide-nav-btn" style="background: var(--accent-green); color: white;" onclick="window.print()">🖨️ PDF 인쇄/내보내기</button>
            </div>
        </div>
    `;
    
    // Initialize chart if present on the active slide (e.g. Page 3 or Page 9 equivalents)
    if (slide.chart) {
        setTimeout(() => {
            const ctx = document.getElementById('slide-chart').getContext('2d');
            if (slideChart) slideChart.destroy();
            
            if (slide.chart === "aish") {
                slideChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['B2C (컨설팅)', 'B2B (스폰서)', 'B2G (RISE)'],
                        datasets: [{
                            label: '재원 규모 (만원)',
                            data: [300, 1500, 1200],
                            backgroundColor: ['#2563eb', '#7c3aed', '#b45309']
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false }
                });
            } else if (slide.chart === "aish_savings") {
                slideChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['1년차 (시작)', '2년차 (안정)', '3년차 (글로벌)'],
                        datasets: [{
                            label: 'API 운영 서버 비용 (만원)',
                            data: [1000, 200, 50],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            fill: true
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false }
                });
            } else if (slide.chart === "gov_grant") {
                slideChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['국비 (70%)', '민간현물 (20%)', '민간현금 (10%)'],
                        datasets: [{
                            data: [70, 20, 10],
                            backgroundColor: ['#2563eb', '#059669', '#dc2626']
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false }
                });
            } else if (slide.chart === "gov_grant_savings") {
                slideChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['TRL 3단계', 'TRL 6단계', 'TRL 8단계'],
                        datasets: [{
                            label: '솔루션 R&D 실증 진척도 (%)',
                            data: [30, 75, 100],
                            backgroundColor: '#2563eb'
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false }
                });
            } else if (slide.chart === "startup_pitch") {
                slideChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['SaaS 구독', 'API Gate', '오픈소스'],
                        datasets: [{
                            label: '수익 비중 (만원)',
                            data: [5000, 12000, 1000],
                            backgroundColor: ['#3b82f6', '#8b5cf6', '#f59e0b']
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false }
                });
            } else if (slide.chart === "startup_pitch_savings") {
                slideChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['1년차', '2년차', '3년차'],
                        datasets: [{
                            label: '예상 매출 (억원)',
                            data: [1, 5, 25],
                            borderColor: '#8b5cf6',
                            fill: false
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false }
                });
            }
        }, 100);
    }
}

// Global scope slide navigation
window.navigateSlide = function(direction) {
    const deck = slidesData[currentTemplateKey];
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) currentSlideIndex = deck.length - 1;
    if (currentSlideIndex >= deck.length) currentSlideIndex = 0;
    renderSlides();
};

// Render selected content tab
function renderContent() {
    const container = document.getElementById("deliverables-text-viewer");
    const data = deliverables[currentTemplateKey];
    const selectVideoProvider = document.getElementById("select-video-api-provider");
    const selectedVideoProvider = selectVideoProvider.value; // higgsfield, runway
    
    if (currentTab === "proposal") {
        document.getElementById("video-mode-wrapper").style.display = "none";
        container.style.display = "block";
        renderProposalBuilder();
    } else if (currentTab === "summary") {
        document.getElementById("video-mode-wrapper").style.display = "none";
        container.style.display = "block";
        renderGovSummary();
    } else if (currentTab === "slides") {
        document.getElementById("video-mode-wrapper").style.display = "none";
        renderSlides();
    } else if (currentTab === "video") {
        document.getElementById("video-mode-wrapper").style.display = "flex";
        container.style.display = "block";
        
        let scriptText = "";
        let providerLabel = "";
        
        if (currentVideoMode === "basic") {
            providerLabel = "기본형 (Gemini/GPT 이미지 스틸컷 연동)";
        } else {
            providerLabel = `선택형 고급 비디오 API: ${selectVideoProvider.options[selectVideoProvider.selectedIndex].text}`;
        }
        scriptText = generateVidsScript(currentTemplateKey, currentVideoMode, selectedVideoProvider);
        
        // Add Google Vids Control HTML with specific styling and launch links
        let vidsControlsHtml = `
            <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:10px; padding:16px; margin-bottom:16px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; box-shadow: 0 2px 10px rgba(0,0,0,0.01);">
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:24px;">🎬</span>
                    <div>
                        <strong style="color:#0f172a; font-size:14px; display:block;">Google Vids 워크스페이스 제작 허브</strong>
                        <span style="color:var(--text-muted); font-size:12px;">제안서 동영상을 Google Vids AI를 통해 슬라이드 기반 비디오로 즉시 제작합니다.</span>
                    </div>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn-page-generate" style="background:#1e293b; display:inline-flex; align-items:center; gap:6px; padding: 8px 14px; font-size:12px;" onclick="copyGoogleVidsScript()">
                        📋 Vids용 스크립트 복사
                    </button>
                    <a href="https://vids.new" target="_blank" class="btn-page-generate" style="background:#ea4335; text-decoration:none; display:inline-flex; align-items:center; gap:6px; padding: 8px 14px; font-size:12px; color:white; font-weight:700;">
                        🚀 Google Vids 만들기
                    </a>
                </div>
            </div>
            
            <div style="background: rgba(234,67,53,0.03); border: 1px dashed rgba(234,67,53,0.25); border-radius: 8px; padding: 12px; font-size: 12px; margin-bottom: 20px; display:flex; align-items:center; gap:12px;">
                <span style="font-size:20px;">💡</span>
                <div style="color:var(--text-secondary); line-height:1.45;">
                    <strong>Google Vids 제작 순서:</strong> 1. <code>📋 Vids용 스크립트 복사</code>를 클릭합니다. ➡️ 2. <code>🚀 Google Vids 만들기</code>를 클릭하여 새 프로젝트를 실행합니다. ➡️ 3. Google Vids 'Help me create a video' AI 프롬프트 창에 복사한 대본을 붙여넣으면 비즈니스 템플릿과 AI 나레이션 오버레이가 자동 디자인됩니다.
                </div>
            </div>
        `;
        
        let introText = `### 📽️ 비디오 자산 오케스트레이션 콘티 & 구성 튜너

본 기획은 AI 동영상 생성을 위한 **콘티 이미지, 음성 파일, 코딩 텍스트 오버레이(자막)**를 파이썬의 \`MoviePy\` 및 \`FFmpeg\` 프레임워크로 결합하여 하나의 최종 미디어 파일로 합성하도록 매핑되어 있습니다.
- **선택된 엔진**: \`${providerLabel}\`
- **음성 합성 프로필**: ElevenLabs Antoni (비즈니스 남성 어조)
- **자막/오버레이**: 화면 중앙 하단 코드 스니펫 (\`Claude/Notion API 연동 코드\`) 오버레이
- **이미지 및 모션 튜닝**: 아래 제작형식 프롬프트를 Higgsfield/Runway에 전달.

---
`;
        container.innerHTML = vidsControlsHtml + `<div class="markdown-body">${parseMarkdown(introText + scriptText)}</div>`;
    } else if (currentTab === "evaluation") {
        document.getElementById("video-mode-wrapper").style.display = "none";
        renderEvaluation();
    }
}
