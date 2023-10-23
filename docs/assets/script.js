const obj = {
	activeTag: ""
};

const section = document.querySelectorAll('section');
const modalWindow = document.getElementById('modal');
// メモからモーダル起動
section.forEach( sect => {
	sect.addEventListener('click', () => {
		let item = sect.cloneNode(true);
		modalWindow.appendChild(item);
		modalWindow.classList.add('open');
	});
});


// モーダル画面を閉じる
modalWindow.addEventListener('click', (Event)=>{
	let modalSect = '#modal > section';
	// console.log(Event.target);

	function modalClose() {
		modalWindow.classList.remove('open');
		let inSection = document.querySelector(modalSect);
		let deleteIn = ()=>{
			modalWindow.removeChild(inSection);
		};
		clearTimeout(deleteIn);
		setTimeout(deleteIn, 400);
	}
	if(Event.target.closest(modalSect) === null){
		modalClose();
	} else if (Event.target.classList == "tag") {
		// モーダル内のタグをクリックしたらタグ表示して閉じる
		obj.activeTag = "#" + Event.target.textContent;
		tagViewChange();
		modalClose();
	}
});

const Nav = document.querySelector('#navigation');
const NavSwitch = document.getElementById('burger');
// ナビメニュー操作 ---------------------------------
NavSwitch.addEventListener('change', (Me)=>{
	if (Me.target.checked === true) {
		Nav.classList.add('open');
	} else {
		Nav.classList.remove('open');
	}
});

const sectList = document.querySelectorAll('section > h2');
const TOC = document.getElementById('toc');
// ナビに目次追加 -------------------------------
(function createTOC(){
	let title, li, a;
	sectList.forEach(Me => {
		title = Me.textContent;
		a = document.createElement('a');
		a.href = "#" + title;
		a.textContent = title;
		li = document.createElement('li');
		li.appendChild(a);
		TOC.appendChild(li);
	});
})();

// タグのリンクを監視する -------------------------------------------
(function tagLinkCheck() {
	const tagLink = document.querySelectorAll('.tag');
	tagLink.forEach( Me => {
		Me.addEventListener('click', Event => {
			obj.activeTag = "#" + Event.target.textContent;
			tagViewChange();
		});
	});
})();
// タグ記事の表示を切り替える
function tagViewChange() {
	// 全てのis-hideを解除する
	section.forEach( sect => {
		sect.classList.remove("is-hide");
	});
	// アクティブタグ以外を取得する
	let target = document
		.querySelectorAll(`section .tag:not([href="${obj.activeTag}"])`);
	// アクティブタグ以外のsectionをis-hide
	target.forEach( t =>{
		// console.log(t.closest('section'));
		t.closest('section').classList.add("is-hide");
	});
}