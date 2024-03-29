// взять текущую позиции курсора мыши и применить ее к css, addeventlistener мониторит позицию курсора/ object assign применить нужыне параметры объекту текущая позиция курсора по оси x при передвижении по экрану $(e.clientx) будет передаватьяс в перменные, можно увидеть в devtools-elements-html style


document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
  `
  })
})