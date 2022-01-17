const section = document.getElementsByTagName('section');
const modalWindow = document.getElementById('modal');

for (let i = 0; i < section.length; i++) {
	section[i].addEventListener('click', () => {
		let item = section[i].cloneNode(true);
		modalWindow.appendChild(item);
		modalWindow.classList.add('open');
	});
}
modalWindow.addEventListener('click', ()=>{
	if (modalWindow.classList.contains('open') == true) {
		console.log(modalWindow.children);
		let inSection = document.querySelector('#modal>section')
		modalWindow.classList.remove('open');
		modalWindow.removeChild(inSection);
	}
});