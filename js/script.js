let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
	const re = /^\d*(\.\d+)?$/
});

const fileInput = document.querySelectorAll('input[type="file"]');


fileInput.forEach((item, index) => {
    item.addEventListener('change', (e) => {
		let files = e.currentTarget.files;
		if (files.length) {
			item.closest('label').querySelector('span').textContent = files[0].name;
		} else {
			item.closest('label').querySelector('span').textContent = 'Click to attach file';
		}
    })
});

let validateForms = function(selector, rules) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			return fetch(`mail.php`, {
				method: 'POST',
				body: formData,
			})
				.then(res => {
					if (res.ok) {
						form.reset();
						const attachFile = document.querySelectorAll('.attach__list')

						attachFile.forEach((item, index) => {
							item.remove();
						});
						addAttach()
						return;
					}
					return Promise.reject(`Ошибка: ${res.status}`);
				})

		}
	});
}

validateForms('.form', { email: {required: true, email: true}, tel: {required: true}});