let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
	const re = /^\d*(\.\d+)?$/
});

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
	let files = e.currentTarget.files;
	console.log(files);

	if (files.length) {
		fileInput.closest('label').querySelector('span').textContent = files[0].name;
	} else {
		fileInput.closest('label').querySelector('span').textContent = 'Attach files';
	}

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
						console.log(res)
						form.reset();

						fileInput.closest('label').querySelector('span').textContent = 'Attach files';
						return;
					}
					return Promise.reject(`Ошибка: ${res.status}`);
				})

		}
	});
}

validateForms('.form', { email: {required: true, email: true}, tel: {required: true} });

