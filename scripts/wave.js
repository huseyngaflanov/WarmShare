(function(){
  const svg = document.getElementById('waveSvg');
  const cx = 80, cy = 80, R = 72, amp = 5, waves = 8, pts = 360;
  let phase = 0;

  function buildPath(ph){
    let d = '';
    for(let i=0;i<=pts;i++){
      const angle = (i/pts)*Math.PI*2;
      const r = R + amp * Math.sin(waves*angle + ph);
      const x = cx + r*Math.cos(angle);
      const y = cy + r*Math.sin(angle);
      d += (i===0?'M':'L') + x.toFixed(2) + ',' + y.toFixed(2);
    }
    return d + 'Z';
  }

  const path = document.createElementNS('http://www.w3.org/2000/svg','path');
  path.setAttribute('fill','none');
  path.setAttribute('stroke','#888');
  path.setAttribute('stroke-width','1.5');
  path.setAttribute('stroke-linecap','round');
  svg.appendChild(path);

  function tick(){
    phase += 0.018;
    path.setAttribute('d', buildPath(phase));
    requestAnimationFrame(tick);
  }
  tick();
})();
