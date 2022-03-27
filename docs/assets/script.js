const section = document.getElementsByTagName('section');
const modalWindow = document.getElementById('modal');
// メモからモーダル起動
for (let i=0; i < section.length; i++) {
	section[i].addEventListener('click', () => {
		let item = section[i].cloneNode(true);
		modalWindow.appendChild(item);
		modalWindow.classList.add('open');
	});
}
// モーダル画面操作
modalWindow.addEventListener('click', (event)=>{
	let modalSect = '#modal > section';
	console.log(event.target);
	if(event.target.closest(modalSect) === null){
		modalWindow.classList.remove('open');
		let inSection = document.querySelector(modalSect);
		let deleteIn = ()=>{
			modalWindow.removeChild(inSection);
		};
		setTimeout(deleteIn, 400);
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
// ナビに目次追加
(function createTOC(){
	let title, li, a;
	sectList.forEach(Me => {
		title = Me.textContent;
		a = document.createElement('a');
		a.href = "#"+title;
		a.textContent = title;
		li = document.createElement('li');
		li.appendChild(a);
		TOC.appendChild(li);
	});
})();

(function tagSwitch() {
	const TagAll = document.querySelectorAll('header a');
	let stock = document.createDocumentFragment();
	let selectTag, tagTarget, tagParent;
	TagAll.forEach( Me =>{
		Me.addEventListener('click', (Event)=> {
			selectTag = "#" + Event.target.textContent;
			tagTarget = document.querySelectorAll(`a.tag[href="${selectTag}"]`);
			tagTarget.forEach( Me =>{
				stock.appendChild(Me.closest('section'));
			});
			console.log(stock);
		});
	});
})();