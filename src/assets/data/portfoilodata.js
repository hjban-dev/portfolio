const portfolioData = {
	portfolioList: [
		{
			name: "Firefly Forest",
			period: "2021.01 - 2021.02",
			project: "Toy",
			logo: "instagram",
			percent: "100%",
			link: "https://firefly-app-eb8f3.web.app/",
			github: "https://github.com/hjban-dev/firefly",
			description: "대나무 숲에서 아이디어를 얻어 만든 반딧불이의 숲 프로젝트입니다.\n익명으로 정보를 쓰고 다른 사람의 정보도 확인 할 수 있는 웹 앱입니다. Firebase를 통해 배포하였고, 약 2주동안 진행하였습니다.",
			tech: ["Html & CSS", "Canvas", "Javascript", "React", "Node.js", "Firebase", "Database"],
			image: [
				{
					name: "firefly/landing.gif",
					tit: "메인페이지",
					desc: "앱에 대해 설명 해주는 메인 페이지입니다. \n배경의 애니메이션은 Canvas를 사용하였습니다.",
				},
				{
					name: "firefly/write.gif",
					tit: "반딧불이 날리기",
					desc: "로그인을 하지 않아도 업로드가 가능합니다. \n보내는 정보와 받는 정보는 default값으로 반딧불이가 저장되지만, 변경도 가능합니다.",
				},
				{
					name: "firefly/detail.gif",
					tit: "반딧불이 구경하기",
					desc:
						"업로드가 된 글을 확인할 수 있습니다. \n데이터는 입력자의 시간 데이터 정보와 함께 DB에 저장되고, 입력자가 보내는 정보와 받는 정보를 적었다면 상세 페이지에서 확인 할 수 있습니다. 데이터는 입력자의 정보와 함께 내림차순으로 노출됩니다.",
				},
			],
		},
		// {
		// 	name: "Instagram Clone",
		// 	period: "2021.01 - 2021.03",
		// 	project: "Toy",
		// 	logo: "instagram",
		// 	percent: "100%",
		// 	github: "https://github.com/hjban-dev/Instagram_clone",
		// 	description: "유명 SNS 앱 Instagram 클론 프로젝트입니다. (제작중입니다) ",
		// 	tech: ["Html & CSS", "Javascript", "React", "Redux", "Node.js", "MongoDB", "Mongoose"],
		// 	image: [
		// 		{
		// 			name: "",
		// 			tit: "제작중입니다",
		// 			desc: "😥😥😥",
		// 		},
		// 	],
		// },
		{
			name: "Youtube Clone",
			project: "Toy",
			logo: "youtube",
			period: "2020.12 - 2021.01",
			percent: "100%",
			github: "https://github.com/hjban-dev/Youtube_clone",
			description: "구글의 동영상 사이트인 YOUTUBE 클론 프로젝트입니다.\n 동영상 업로드, 댓글, 좋아요 등의 기능을 개발하였습니다. 기간은 약 한달정도 소요되었고, 혼자 제작하였습니다.",
			tech: ["Html & CSS", "Javascript", "React", "Redux", "Node.js", "MongoDB", "Mongoose"],
			image: [
				{
					name: "youtube/youtube1.gif",
					tit: "회원가입, 로그인",
					desc: "회원가입 창에서 입력한 정보를 MongoDB에 저장하여 회원가입이 실행됩니다.\n DB의 정보들을 토대로 로그인이 실행됩니다.",
				},
				{
					name: "youtube/youtube2.gif",
					tit: "동영상 업로드 ",
					desc: "업로드 페이지는 로그인이 되어 있는 사용자만 접근 가능하며, 컴퓨터에 있는 동영상을 업로드 할 수 있습니다. \n제목은 동영상의 제목으로 기본 생성되지만, 변경이 가능합니다.",
				},
				{
					name: "youtube/youtube3.gif",
					tit: "댓글",
					desc:
						"업로드가 된 동영상에 댓글을 입력할 수 있습니다. \n댓글 데이터는 입력자와 비디오 정보와 함께 DB에 저장되고, DB 정보를 토대로 관련 댓글 정보를 추출하여 댓글 영역에 띄워줍니다. 댓글 데이터는 입력자의 정보와 함께 내림차순으로 노출됩니다.",
				},
				{
					name: "youtube/youtube4.gif",
					tit: "좋아요",
					desc:
						"영상과 댓글에 모두 좋아요 기능이 가능합니다. \n좋아요를 누른 입력자와 비디오 정보 또는 댓글 정보가 함께 DB에 저장되고, 비디오와 댓글 정보를 토대로 관련 좋아요 정보의 갯수를 파악하여 보여줍니다. 사용자가 이전에 좋아요를 누른 경우 active 효과가 실행됩니다.",
				},
				{
					name: "youtube/youtube5.gif",
					tit: "구독",
					desc: "내가 아닌 다른 사용자의 동영상에서 구독버튼이 노출됩니다. \n이미 구독을 누른 경우 구독 버튼은 비활성화 되어있습니다. 구독을 하면 구독 페이지에서 내가 구독한 사람의 영상을 볼 수 있습니다.",
				},
			],
		},
		{
			name: "Hanssem Mobile Renewal",
			project: "Freelancer",
			logo: "hanssem",
			period: "2020.09 - 2020.11",
			percent: "45%",
			link: "http://mall.hanssem.com/m/main.html?module=home",
			description: "한샘몰 모바일 리뉴얼 작업하였습니다. 모바일 페이지를 전체 리뉴얼 작업을 하였습니다. 각 요소들을 컴포넌트화 시켜서 작업하였습니다.",
			tech: ["Html & CSS", "Javascript", "SVN", "Zeplin"],
			image: [
				{
					name: "hanssem/main.png",
					tit: "",
					desc: "",
				},
				{
					name: "hanssem/main2.png",
					tit: "",
					desc: "",
				},
			],
		},
		{
			name: "Samsung Galaxy Tab S7 Production",
			project: "Coner",
			logo: "samsung",
			period: "2020.5 - 2020.9",
			percent: "50%",
			link: "https://www.samsung.com/global/galaxy/galaxy-tab-s7/",
			description: "삼성 갤럭시 탭 S7 페이지를 제작하였습니다. 삼성 솔루션을 사용하였고, 배포하는 과정에서 AEM 시스템을 사용하였습니다. 삼성의 웹 접근성 가이드를 엄격히 준수하여 작업하였습니다.",
			tech: ["Html & CSS", "Javascript", "Canvas"],
			image: [
				{
					name: "tab/main.gif",
					tit: "",
					desc: "",
				},
				{
					name: "tab/main1.gif",
					tit: "",
					desc: "",
				},
				{
					name: "tab/main2.gif",
					tit: "",
					desc: "",
				},
				{
					name: "tab/main3.gif",
					tit: "",
					desc: "",
				},
				{
					name: "tab/main4.gif",
					tit: "",
					desc: "",
				},
			],
		},
		{
			name: "Canon Rchive Production",
			project: "Coner",
			logo: "canon",
			period: "2020.4 - 2020.8",
			percent: "30%",
			link: "https://www.canon-ci.co.kr/rchive/main/index",
			description: "캐논 Rchive 사이트를 제작하였습니다. 캐논 보안 시스템으로 인해 캐논 본사로 파견을 가서 배포를 진행하였습니다. 다양한 인터렉션으로 GDWEB의 웹 부분에서 대상을 수상하였습니다.",
			tech: ["Html & CSS", "Javascript", "ES6", "Gulp", "Scss", "SVN"],
			image: [
				{
					name: "canon/main1.gif",
					tit: "",
					desc: "",
				},
				{
					name: "canon/main2.gif",
					tit: "",
					desc: "",
				},
				{
					name: "canon/lens.gif",
					tit: "",
					desc: "",
				},
				{
					name: "canon/gallery.gif",
					tit: "",
					desc: "",
				},
			],
		},
		{
			name: "Kia Ao 2020 Production",
			project: "Coner",
			logo: "kia",
			period: "2019.10 - 2020.11",
			percent: "50%",
			link: "https://www.canon-ci.co.kr/rchive/main/index",
			description: "기아 AO 2020 이벤트 페이지를 제작하였습니다. 무한히 진행 되는 선 드로잉 애니메이션이 사이트의 메인 컨셉입니다. 모든 페이지에 반영된 애니메이션이 사용자의 흥미를 유발하는 사이트입니다.",
			tech: ["Html & CSS", "Javascript"],
			image: [
				{
					name: "ao/main1.gif",
					tit: "",
					desc: "",
				},
				{
					name: "ao/main2.gif",
					tit: "",
					desc: "",
				},
				{
					name: "ao/main3.gif",
					tit: "",
					desc: "",
				},
			],
		},
		{
			name: "Winix Site Renewal",
			project: "Coner",
			logo: "winix",
			period: "2019.09 - 2020.01",
			percent: "40%",
			link: "https://www.winix.com/kr/index.html",
			description: "위닉스 홈페이지 리뉴얼 작업을 하였습니다. 리뉴얼 작업과 함께 위닉스의 로고와 메인 컬러가 변경되면서 모든 페이지를 제작하였습니다. 관리자 페이지와 연동되어 있습니다.",
			tech: ["Html & CSS", "Javascript", "SVN"],
			image: [
				{
					name: "winix/main.gif",
					tit: "",
					desc: "",
				},
				{
					name: "winix/main2.gif",
					tit: "",
					desc: "",
				},
				{
					name: "winix/main3.gif",
					tit: "",
					desc: "",
				},
			],
		},
		{
			name: "Kia Seltos Maincampaign",
			project: "Coner",
			logo: "kia",
			period: "2019.8 - 2019.10",
			percent: "50%",
			link: "http://coner.co.kr/project/kia_sp2/maincampaign/pc/",
			description: "기아의 셀토스 메인 캠페인 페이지를 제작하였습니다. 기아의 솔루션을 사용하였습니다. 사이트의 컨셉에 맞춰 창의적인 인터렉션을 시도하려고 노력하였습니다.",
			tech: ["Html & CSS", "Javascript"],
			image: [
				{
					name: "kia/main.gif",
					tit: "",
					desc: "",
				},
			],
		},
		{
			name: "Samsung Wearable (Watch, Buds)",
			project: "Coner",
			logo: "samsung",
			period: "2018.8 - 2018.10",
			percent: "50%",
			link: "http://coner.co.kr/project/samsung_galaxy/friday/",
			description: "삼성 웨어러블 시리즈 글로벌 페이지를 작업하였습니다. 글로벌 사이트라서 중동국가 및 IE8까지 대응하였습니다.",
			tech: ["Html & CSS", "Javascript"],
			image: [
				{
					name: "buds/main.gif",
					tit: "",
					desc: "",
				},
				{
					name: "buds/main4.gif",
					tit: "",
					desc: "",
				},
				{
					name: "buds/main2.gif",
					tit: "",
					desc: "",
				},
				{
					name: "buds/main3.gif",
					tit: "",
					desc: "",
				},
			],
		},
	],
};

export default portfolioData;
