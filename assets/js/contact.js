document.addEventListener('DOMContentLoaded', function () {
	const oMobileOperator = '+996703055333';
	const beelineMobileOperator = '+996222055330';
	const whatsAppLink = '996703055333';

	const linksWrapper = document.createElement('div');
	linksWrapper.className = 'links-wrapper';

	const whatsappButton = document.createElement('a');
	whatsappButton.href = `https://wa.me/${whatsAppLink}`;
	whatsappButton.target = '_blank';
	whatsappButton.title = 'Написать в Whatsapp';
	whatsappButton.rel = 'noopener noreferrer';
	whatsappButton.innerHTML = `
        <div class="whatsapp-button" style='display: flex; align-items: center; justify-content: center;'>
            <img src='assets/img/icon/whatsapp.svg' alt='' />
        </div>
    `;

	const oMobileButton = document.createElement('a');
	oMobileButton.href = `tel:${oMobileOperator}`;
	oMobileButton.target = '_blank';
	oMobileButton.title = 'Позвонить в O!';
	oMobileButton.rel = 'noopener noreferrer';
	oMobileButton.innerHTML = `
        <div class="phone-button o-mobile" style='display: flex; align-items: center; justify-content: center;'>
            <img src='assets/img/icon/o-mobile-operator.png' alt='' />
        </div>
    `;

	const beelineMobileButton = document.createElement('a');
	beelineMobileButton.href = `tel:${beelineMobileOperator}`;
	beelineMobileButton.target = '_blank';
	beelineMobileButton.title = 'Позвонить в Beeline!';
	beelineMobileButton.rel = 'noopener noreferrer';
	beelineMobileButton.innerHTML = `
        <div class="phone-button beeline-mobile" style='display: flex; align-items: center; justify-content: center;'>
            <img src='assets/img/icon/beeline-mobile-operator.png' alt='' />
        </div>
    `;
	linksWrapper.appendChild(oMobileButton);
	linksWrapper.appendChild(beelineMobileButton);
	linksWrapper.appendChild(whatsappButton);
	document.body.appendChild(linksWrapper);

	const style = document.createElement('style');
	style.innerHTML = `
	 .links-wrapper {
	 	position: fixed;
		right: 30px;
		bottom: 25px;
		transform: translateY(-50%);
		z-index: 9999;
		display: flex;
		gap: 11px;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
	 }

    .whatsapp-button {
      border-radius: 50%;
      width: 55px;
      height: 55px;
      text-align: center;
      line-height: 53px;
      font-size: 35px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
  }
  
  .whatsapp-button::before,
  .whatsapp-button::after {
      content: " ";
      display: block;
      position: absolute;
      border: 50%;
      border: 1px solid #36BB49;
      left: -20px;
      right: -20px;
      top: -20px;
      bottom: -20px;
      border-radius: 50%;
      animation: animate 1.5s linear infinite;
      opacity: 0;
      backface-visibility: hidden;
  }
  
  .whatsapp-button::after {
      animation-delay: 0.5s;
  }

    .phone-button {
      border-radius: 50%;
      width: 55px;
      height: 55px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
  }
  
  .phone-button::before,
  .phone-button::after {
		content: " ";
      display: block;
      position: absolute;
      border: 50%;
      left: -20px;
      right: -20px;
      top: -20px;
      bottom: -20px;
      border-radius: 50%;
      animation: animate 1.5s linear infinite;
      opacity: 0;
      backface-visibility: hidden;
  }

	.o-mobile::before, .o-mobile::after {
		border: 1px solid #F00280;
	}
	.beeline-mobile::before, .beeline-mobile::after {
		border: 1px solid #FEC900;
	}
  
  .phone-button::after {
      animation-delay: .5s;
  }

  .beeline-mobile, .whatsapp-button img {
		width: 33px;
		height: 33px;
  }
  
  @keyframes animate {
      0% {
          transform: scale(0.5);
          opacity: 0;
      }
  
      50% {
          opacity: 1;
      }
  
      100% {
          transform: scale(1.2);
          opacity: 0;
      }
  }
    `;
	document.head.appendChild(style);
});

document.querySelectorAll('.custom-link').forEach((link) => {
	link.addEventListener('click', function (event) {
		event.preventDefault();

		const targetId = this.getAttribute('href');
		const targetSection = document.querySelector(targetId);

		if (targetSection) {
			targetSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});
});
