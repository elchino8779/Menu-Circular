const menu = document.querySelector('.icon-menu');
const facebook = document.querySelector('.icon-facebook');
const instagram = document.querySelector('.icon-instagram');
const messenger = document.querySelector('.icon-messenger');
const whatsapp = document.querySelector('.icon-whatsapp');
const twiter = document.querySelector('.icon-twiter');
const discord = document.querySelector('.icon-discord');
const linkedin = document.querySelector('.icon-linkedin');
const twitch = document.querySelector('.icon-twitch');
const container = document.querySelector('.container');

let active = false;

menu.addEventListener('click', () => {
  active = !active;
  if (active) {
    facebook.style.animationName = 'facebook';
    instagram.style.animationName = 'instagram';
    messenger.style.animationName = 'messenger';
    whatsapp.style.animationName = 'whatsapp';
    twiter.style.animationName = 'twiter';
    discord.style.animationName = 'discord';
    linkedin.style.animationName = 'linkedin';
    twitch.style.animationName = 'twitch';
    container.style.backgroundColor = '#32303030';
    container.style.boxShadow = '0 0 10px #32303030';
  } else {
    facebook.style.animationName = 'facebook-out';
    instagram.style.animationName = 'instagram-out';
    messenger.style.animationName = 'messenger-out';
    whatsapp.style.animationName = 'whatsapp-out';
    twiter.style.animationName = 'twiter-out';
    discord.style.animationName = 'discord-out';
    linkedin.style.animationName = 'linkedin-out';
    twitch.style.animationName = 'twitch-out';
    container.style.backgroundColor = 'transparent';
    container.style.boxShadow = '0 0 10px transparent';
  }
});
