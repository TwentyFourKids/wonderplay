(() => {
  'use strict';
  const root = document.getElementById('app');
  const data = window.GAME_DATA;
  const orderedIds = ['tree','suitcase','halloween','christmas','birthday'];
  const themes = orderedIds.map(id => data.find(theme => theme.id === id));
  const AGE_LABELS = ['5–8 лет','9–14 лет','15–17 лет','18+ лет'];
  const LEVELS = ['A1','A2','B1'];
  const THEME_DESCRIPTIONS = { tree:'Желания и планы', suitcase:'Вещи для путешествия', halloween:'Праздничный дом с привидениями', christmas:'Уютное Рождество у камина', birthday:'Праздник для друзей' };
  const state = { screen:'setup', themeId:'tree', age:0, level:0, placed:[], ready:null, modal:null, completed:false, drag:null, suppressClickUntil:0 };

  function theme() { return themes.find(entry => entry.id === state.themeId); }
  function itemById(id) { return theme().items.find(item => item.id === id); }
  function displayLabel(item) { return item.ageLabels?.[state.age] || item.label; }
  function currentQuestion(item) { return item.questions[state.age][state.level]; }
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }

  const sceneMarkup = {
    tree: `<svg class="scene-svg" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="treebg" x2="1" y2="1"><stop stop-color="#d9f2e9"/><stop offset="1" stop-color="#b8dcce"/></linearGradient><linearGradient id="branch" x2="1"><stop stop-color="#146b58"/><stop offset=".5" stop-color="#1f8c6a"/><stop offset="1" stop-color="#0d554c"/></linearGradient><filter id="treeShadow"><feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#185d50" flood-opacity=".22"/></filter></defs><rect width="1000" height="700" fill="url(#treebg)"/><circle cx="820" cy="110" r="150" fill="#fff" opacity=".16"/><circle cx="150" cy="610" r="210" fill="#fff" opacity=".13"/><path d="M0 570 Q210 535 390 575 T1000 550 V700 H0Z" fill="#f6fffb" opacity=".7"/><ellipse cx="500" cy="609" rx="300" ry="36" fill="#2e876f" opacity=".15"/><rect x="474" y="532" width="52" height="82" rx="8" fill="#775845"/><g fill="url(#branch)" stroke="#0f6556" stroke-width="4" stroke-linejoin="round" filter="url(#treeShadow)"><path d="M500 95 L552 215 L447 215 Z"/><path d="M500 142 L615 298 L385 298 Z"/><path d="M500 206 L675 385 L325 385 Z"/><path d="M500 270 L740 485 L260 485 Z"/><path d="M500 340 L810 574 L190 574 Z"/></g><path d="M500 67 l12 24 26 4 -19 19 5 27 -24 -13 -24 13 5 -27 -19 -19 26 -4Z" fill="#ffe59b" stroke="#f8d16c" stroke-width="5"/><path d="M315 466 Q495 521 690 461 M378 356 Q501 405 625 352 M442 238 Q502 258 554 236" fill="none" stroke="#f8e5a0" stroke-width="5" opacity=".85" stroke-linecap="round" stroke-dasharray="10 18"/><circle cx="225" cy="160" r="4" fill="#fff"/><circle cx="790" cy="332" r="5" fill="#fff"/><circle cx="110" cy="387" r="3" fill="#fff"/><circle cx="846" cy="536" r="4" fill="#fff"/></svg>`,
    suitcase: `<svg class="scene-svg" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="travelbg" x2="1" y2="1"><stop stop-color="#e7eeff"/><stop offset="1" stop-color="#c6d6ef"/></linearGradient><linearGradient id="case" x2="0" y2="1"><stop stop-color="#f5bd76"/><stop offset="1" stop-color="#df8e66"/></linearGradient><filter id="caseShadow"><feDropShadow dx="0" dy="20" stdDeviation="22" flood-color="#254c77" flood-opacity=".2"/></filter></defs><rect width="1000" height="700" fill="url(#travelbg)"/><circle cx="170" cy="130" r="160" fill="#fff" opacity=".35"/><circle cx="830" cy="580" r="220" fill="#fff" opacity=".23"/><path d="M0 568 Q230 520 460 563 T1000 548 V700 H0Z" fill="#f3f7fd"/><path d="M80 168 Q340 55 630 140 T940 118" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="12 15" opacity=".8"/><path d="M795 78 l47 14 -25 13 -11 34 -16 -30 -34 -12Z" fill="#fff" opacity=".92"/><g filter="url(#caseShadow)"><rect x="365" y="205" width="270" height="90" rx="40" fill="none" stroke="#ad6f56" stroke-width="32"/><rect x="185" y="278" width="630" height="325" rx="46" fill="url(#case)" stroke="#ba7459" stroke-width="12"/><rect x="205" y="326" width="590" height="239" rx="20" fill="#ffdeb1" opacity=".62"/><path d="M235 322 V569 M765 322 V569" stroke="#bd7a58" stroke-width="24"/><path d="M235 337 H765" stroke="#d7956d" stroke-width="10"/><rect x="460" y="285" width="80" height="30" rx="8" fill="#9b6755"/><rect x="455" y="390" width="90" height="66" rx="9" fill="#f9f4e7" stroke="#d7a976" stroke-width="5"/><circle cx="500" cy="423" r="19" fill="none" stroke="#5da9ac" stroke-width="5"/></g><circle cx="300" cy="618" r="16" fill="#444a62"/><circle cx="700" cy="618" r="16" fill="#444a62"/></svg>`,
    halloween: `<svg class="scene-svg" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="hallbg" x2="0" y2="1"><stop stop-color="#42406d"/><stop offset="1" stop-color="#b27882"/></linearGradient><linearGradient id="hallhouse" x2="1" y2="1"><stop stop-color="#6a5d7b"/><stop offset="1" stop-color="#514764"/></linearGradient><filter id="hallshadow"><feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#302d48" flood-opacity=".4"/></filter></defs><rect width="1000" height="700" fill="url(#hallbg)"/><circle cx="790" cy="122" r="73" fill="#fff4c5" opacity=".9"/><circle cx="790" cy="122" r="92" fill="#fff4c5" opacity=".11"/><path d="M0 580 Q250 550 500 586 T1000 564 V700 H0Z" fill="#51475e"/><g fill="#3a4555"><path d="M90 620 V275 h25 v345Z"/><circle cx="102" cy="267" r="70"/><circle cx="55" cy="305" r="54"/><circle cx="147" cy="310" r="50"/><path d="M899 620 V310 h25 v310Z"/><circle cx="911" cy="290" r="75"/><circle cx="857" cy="327" r="53"/><circle cx="964" cy="333" r="54"/></g><g filter="url(#hallshadow)"><path d="M220 332 L500 127 L780 332 Z" fill="#3b3558" stroke="#c49c91" stroke-width="9"/><rect x="250" y="316" width="500" height="286" rx="6" fill="url(#hallhouse)" stroke="#d5a189" stroke-width="10"/><path d="M328 322 V220 L385 177 V322" fill="#50445f" stroke="#d5a189" stroke-width="7"/><path d="M615 322 V178 L672 220 V322" fill="#50445f" stroke="#d5a189" stroke-width="7"/><rect x="450" y="459" width="100" height="143" rx="45" fill="#312b47" stroke="#e3ac85" stroke-width="8"/><circle cx="525" cy="537" r="5" fill="#f8c475"/><rect x="305" y="380" width="90" height="97" rx="35" fill="#f9c986" stroke="#e7ad7d" stroke-width="9"/><path d="M350 380 V477 M305 428 H395" stroke="#d99d70" stroke-width="7"/><rect x="605" y="380" width="90" height="97" rx="35" fill="#f9c986" stroke="#e7ad7d" stroke-width="9"/><path d="M650 380 V477 M605 428 H695" stroke="#d99d70" stroke-width="7"/></g><circle cx="170" cy="130" r="3" fill="#fff"/><circle cx="306" cy="75" r="4" fill="#fff"/><circle cx="920" cy="182" r="3" fill="#fff"/></svg>`,
    christmas: `<svg class="scene-svg" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="firebg" x2="0" y2="1"><stop stop-color="#f6e7df"/><stop offset="1" stop-color="#e8c8bb"/></linearGradient><linearGradient id="flame" x2="0" y2="1"><stop stop-color="#fff4a9"/><stop offset=".5" stop-color="#ffb367"/><stop offset="1" stop-color="#e66d52"/></linearGradient><filter id="fireshadow"><feDropShadow dx="0" dy="20" stdDeviation="20" flood-color="#824d43" flood-opacity=".2"/></filter></defs><rect width="1000" height="700" fill="url(#firebg)"/><path d="M0 505 H1000 V700 H0Z" fill="#d6af9f"/><path d="M0 506 H1000" stroke="#b88778" stroke-width="10"/><g filter="url(#fireshadow)"><rect x="220" y="290" width="560" height="335" rx="10" fill="#f8eee7" stroke="#d5b7ab" stroke-width="13"/><path d="M332 593 V428 Q332 368 500 368 Q668 368 668 428 V593Z" fill="#5a4142"/><path d="M356 591 V432 Q356 395 500 395 Q644 395 644 432 V591Z" fill="#7c5251"/><path d="M408 584 Q383 537 429 484 Q421 536 458 523 Q450 455 508 435 Q491 512 530 520 Q543 481 577 479 Q571 527 596 581Z" fill="url(#flame)"/><path d="M448 583 Q430 554 462 519 Q471 547 496 543 Q491 505 521 490 Q518 542 548 548 Q557 534 566 523 Q575 560 560 584Z" fill="#fff3a3"/><path d="M385 584 Q500 555 620 584" fill="none" stroke="#543936" stroke-width="21" stroke-linecap="round"/><rect x="182" y="265" width="636" height="46" rx="12" fill="#a97667"/><rect x="220" y="604" width="560" height="28" rx="8" fill="#9f6f63"/></g><rect x="270" y="182" width="62" height="87" rx="8" fill="#dfad94"/><path d="M301 180 Q285 151 303 128 Q324 155 301 180" fill="#ffdb96"/><rect x="670" y="191" width="55" height="75" rx="7" fill="#ce9787"/><path d="M697 190 Q683 166 698 146 Q719 169 697 190" fill="#ffe0a0"/><circle cx="500" cy="138" r="85" fill="none" stroke="#4b9f7c" stroke-width="23" stroke-dasharray="18 6"/><path d="M471 211 Q499 178 529 211" fill="none" stroke="#c55f66" stroke-width="20" stroke-linecap="round"/></svg>`,
    birthday: `<svg class="scene-svg" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="partybg" x2="1" y2="1"><stop stop-color="#f7e9f5"/><stop offset="1" stop-color="#d8e5ff"/></linearGradient><filter id="partyshadow"><feDropShadow dx="0" dy="15" stdDeviation="18" flood-color="#594869" flood-opacity=".14"/></filter></defs><rect width="1000" height="700" fill="url(#partybg)"/><path d="M0 548 H1000 V700 H0Z" fill="#e9d6e4"/><path d="M0 548 H1000" stroke="#d5bed4" stroke-width="8"/><path d="M0 80 Q500 230 1000 80" fill="none" stroke="#b987bf" stroke-width="8"/><path d="M90 90 l35 54 35 -38 35 58 35 -33 35 63 35 -40 35 63 35 -48 35 63 35 -45 35 58 35 -46 35 60 35 -43 35 59 35 -48 35 57 35 -45 35 54 35 -43 35 50 35 -45" fill="none" stroke="#d49dbb" stroke-width="15" stroke-linejoin="round" opacity=".7"/><g filter="url(#partyshadow)"><ellipse cx="500" cy="546" rx="310" ry="45" fill="#bd8ea9" opacity=".18"/><rect x="220" y="500" width="560" height="50" rx="18" fill="#b783a1"/><path d="M290 550 L270 660 M710 550 L730 660" stroke="#8d6a86" stroke-width="28" stroke-linecap="round"/><ellipse cx="500" cy="470" rx="190" ry="37" fill="#fff9f5"/><rect x="347" y="358" width="306" height="118" rx="25" fill="#ffcedc" stroke="#f3a9bd" stroke-width="8"/><path d="M346 392 Q378 423 410 392 Q444 421 474 392 Q506 423 538 392 Q570 424 602 392 Q633 420 654 393" fill="none" stroke="#fffaf4" stroke-width="24" stroke-linecap="round"/><ellipse cx="500" cy="356" rx="154" ry="34" fill="#fff0f2"/><path d="M500 344 V276" stroke="#8d7ea9" stroke-width="8"/><path d="M500 273 Q478 252 500 229 Q523 255 500 273" fill="#ffdb86"/></g><path d="M170 460 Q130 310 175 190 M830 460 Q875 310 825 198" fill="none" stroke="#937b9e" stroke-width="4"/><ellipse cx="175" cy="180" rx="48" ry="65" fill="#e9a7bd"/><ellipse cx="825" cy="186" rx="48" ry="65" fill="#a6c9e9"/><circle cx="89" cy="303" r="7" fill="#e4b885"/><circle cx="915" cy="370" r="8" fill="#a6bcdb"/></svg>`
  };

  function renderSetup() {
    root.innerHTML = `<div class="app-shell"><header class="topbar"><div class="brand"><span class="brand-mark">✦</span>Wonderplay</div><div class="top-note">Interactive speaking games for English lessons</div></header><main class="shell-main"><div class="intro"><p class="eyebrow">English comes alive</p><h1>Choose a world. Start a conversation.</h1><p>Пять интерактивных историй для устной практики английского. Выберите тему, возраст и уровень — и играйте вместе.</p></div><div class="setup-grid"><section class="panel themes-panel"><div class="section-heading"><h2>Выберите игру</h2><span>5 тем · 14 предметов в каждой</span></div><div class="themes">${themes.map(entry => `<button type="button" class="theme-card ${entry.id === state.themeId ? 'active' : ''}" data-theme="${entry.id}" aria-pressed="${entry.id === state.themeId}"><div class="theme-preview" style="background:${entry.color}">${entry.preview}</div><div class="theme-card-body"><strong>${entry.title}</strong><small>${entry.ru}</small></div></button>`).join('')}</div></section><aside class="panel settings-card"><h2>Настройки занятия</h2><p>Выберите возраст и уровень ученика. Вопросы подстроятся под оба параметра.</p><label class="field"><span>Возраст ученика</span><div class="select-wrap"><select id="age-select">${AGE_LABELS.map((label,index) => `<option value="${index}" ${index === state.age ? 'selected' : ''}>${label}</option>`).join('')}</select></div></label><label class="field"><span>Уровень английского</span><div class="select-wrap"><select id="level-select">${LEVELS.map((label,index) => `<option value="${index}" ${index === state.level ? 'selected' : ''}>${label}</option>`).join('')}</select></div></label><button type="button" class="primary start-btn" id="start-game">Начать игру</button><p class="hint">Ученик отвечает устно. Ничего вводить и сохранять не нужно.</p></aside></div><p class="setup-footer">Made for curious minds, little and grown.</p></main></div>`;
    root.querySelector('.top-note').textContent = 'Игры для устной практики английского';
    root.querySelector('.intro .eyebrow').textContent = 'Английский в игре';
    root.querySelector('.intro h1').textContent = 'Выберите историю. Начните разговор.';
    root.querySelector('.setup-footer').textContent = 'Для любознательных учеников любого возраста.';
    root.querySelectorAll('.theme-card').forEach(button => {
      const entry = themes.find(candidate => candidate.id === button.dataset.theme);
      button.querySelector('strong').textContent = entry.ru;
      button.querySelector('small').textContent = THEME_DESCRIPTIONS[entry.id];
    });
  }

  function renderGame() {
    const entry = theme();
    const used = new Set(state.placed.map(placed => placed.id));
    const full = state.placed.length >= 7;
    root.innerHTML = `<div class="app-shell"><header class="topbar"><div class="brand"><span class="brand-mark">✦</span>Wonderplay</div><div class="top-note">Play. Speak. Imagine.</div></header><main class="shell-main game-main"><div class="game-header"><button type="button" class="back-btn" id="back-setup">← Settings</button><div class="game-header-middle"><p class="eyebrow">${AGE_LABELS[state.age].replace(' лет',' years')} · ${LEVELS[state.level]}</p><h1>${entry.title}</h1></div><div class="progress-wrap"><span>${state.placed.length} / 7 chosen</span><div class="progress-bar" role="progressbar" aria-label="Items placed" aria-valuenow="${state.placed.length}" aria-valuemin="0" aria-valuemax="7"><i style="width:${state.placed.length/7*100}%"></i></div></div></div><div class="game-layout"><section class="scene-panel"><div class="scene-caption"><p class="eyebrow">Your scene</p><h2 class="stage-title">${entry.caption}</h2><p class="stage-subtitle">${entry.subtitle}</p></div><div class="scene-area ${state.ready ? 'armed' : ''}" id="scene-area" aria-label="Place your chosen items here">${sceneMarkup[entry.id]}${state.placed.map(placed => { const item = itemById(placed.id); return `<button type="button" class="placed-item" data-placed="${item.id}" style="left:${placed.x}%;top:${placed.y}%" aria-label="${escapeHtml(displayLabel(item))}. Move or remove item.">${item.icon}</button>`; }).join('')}<div class="scene-drop-note">${state.ready ? 'Drag the item here or tap a spot' : full ? 'Seven wonderful choices!' : 'Choose an item to start'}</div></div></section><aside class="inventory"><div class="inventory-head"><p class="eyebrow">Pick your favourites</p><h2>Choose 7 of 14</h2><p>Tap an item, answer the question aloud, then place it in the scene.</p></div><div class="inventory-grid">${entry.items.map(item => `<button type="button" class="item-card ${used.has(item.id) ? 'used' : ''} ${state.ready === item.id ? 'ready' : ''}" data-item="${item.id}" ${used.has(item.id) || (full && state.ready !== item.id) ? 'disabled' : ''} aria-label="${escapeHtml(displayLabel(item))}${state.ready === item.id ? ', ready to place' : ''}"><span class="item-emoji">${item.icon}</span><span class="item-label">${escapeHtml(displayLabel(item))}</span></button>`).join('')}</div><div class="inventory-foot">${state.ready ? 'Ready to place: ' + escapeHtml(displayLabel(itemById(state.ready))) : 'Questions are for speaking. Your teacher decides when to place each item.'}</div></aside></div></main></div>${state.modal ? modalMarkup() : ''}`;
  }

  function modalMarkup() {
    if (state.modal.type === 'complete') {
      return `<div class="modal-layer" role="dialog" aria-modal="true" aria-labelledby="complete-title"><div class="completion"><div class="completion-emoji">✨</div><p class="eyebrow">Well done!</p><h2 id="complete-title">Your scene is complete.</h2><p>Seven choices, seven conversations. What did you discover?</p><div class="chosen-list">${state.placed.map(placed => { const item = itemById(placed.id); return `<span class="chosen-pill"><span>${item.icon}</span>${escapeHtml(displayLabel(item))}</span>`; }).join('')}</div><div class="completion-actions"><button type="button" class="plain-btn" id="view-scene">View scene</button><button type="button" class="plain-btn" id="new-round">Play again</button><button type="button" class="primary" id="choose-theme">Choose a game</button></div></div></div>`;
    }
    const item = itemById(state.modal.id);
    const placed = state.modal.type === 'placed';
    return `<div class="modal-layer" role="dialog" aria-modal="true" aria-labelledby="question-title"><div class="question-modal"><button type="button" class="modal-close" id="close-modal" aria-label="Close">×</button><div class="modal-item">${item.icon}</div><p class="item-name">${escapeHtml(displayLabel(item))}</p><p class="eyebrow">Let's talk</p><h2 id="question-title">${escapeHtml(currentQuestion(item))}</h2><p class="support">${placed ? 'You can move this item by dragging it, or return it to the collection.' : 'Take your time and answer aloud. Your teacher will help when you are ready.'}</p><div class="modal-actions">${placed ? `<button type="button" class="plain-btn" id="remove-item" data-id="${item.id}">Remove item</button><button type="button" class="primary" id="close-modal-primary">Keep it</button>` : `<button type="button" class="plain-btn" id="skip-question">Not now</button><button type="button" class="primary" id="answer-done" data-id="${item.id}">Ready to place</button>`}</div></div></div>`;
  }

  function render() { state.screen === 'setup' ? renderSetup() : renderGame(); if (state.modal) setTimeout(() => document.querySelector('#close-modal, #view-scene')?.focus(), 0); }
  function openQuestion(id, type='question') { state.modal = { type, id }; render(); }
  function closeModal() { state.modal = null; render(); }

  function positionFor(event, area) {
    const rect = area.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 100;
    const y = (event.clientY - rect.top) / rect.height * 100;
    return clampPosition(x,y);
  }
  function clampPosition(x,y) {
    x = Math.max(8, Math.min(92, x)); y = Math.max(13, Math.min(88, y));
    if (state.themeId === 'tree') {
      y = Math.max(19, Math.min(80, y));
      const half = 6 + (y-19)*.48;
      x = Math.max(50-half, Math.min(50+half, x));
    } else if (state.themeId === 'suitcase') { x = Math.max(23,Math.min(77,x)); y = Math.max(44,Math.min(79,y)); }
    else if (state.themeId === 'halloween') { x = Math.max(26,Math.min(74,x)); y = Math.max(32,Math.min(79,y)); }
    else if (state.themeId === 'christmas') { x = Math.max(24,Math.min(76,x)); y = Math.max(31,Math.min(82,y)); }
    return {x: Math.round(x*10)/10, y: Math.round(y*10)/10};
  }
  function avoidOverlap(pos, id) {
    const others = state.placed.filter(placed => placed.id !== id);
    if (!others.some(placed => Math.hypot(placed.x-pos.x,placed.y-pos.y) < 10)) return pos;
    for (const radius of [12,18,24,30]) for (let angle=0; angle<360; angle+=45) {
      const rad=angle*Math.PI/180;
      const candidate=clampPosition(pos.x+radius*Math.cos(rad),pos.y+radius*Math.sin(rad));
      if (!others.some(placed=>Math.hypot(placed.x-candidate.x,placed.y-candidate.y)<10)) return candidate;
    }
    return pos;
  }
  function placeReady(pos) {
    if (!state.ready || state.placed.length >= 7) return;
    const id=state.ready;
    state.placed.push({id,...avoidOverlap(pos,id)});
    state.ready=null;
    if (state.placed.length === 7) { state.modal={type:'complete'}; state.completed=true; }
    render();
  }
  function resetRound() { state.placed=[]; state.ready=null; state.modal=null; state.completed=false; render(); }

  root.addEventListener('change', event => {
    if (event.target.id === 'age-select') state.age=Number(event.target.value);
    if (event.target.id === 'level-select') state.level=Number(event.target.value);
  });
  root.addEventListener('click', event => {
    const target=event.target;
    const themeButton=target.closest('[data-theme]');
    if (themeButton && state.screen==='setup') { state.themeId=themeButton.dataset.theme; render(); return; }
    if (target.closest('#start-game')) { state.screen='game'; resetRound(); window.scrollTo(0,0); return; }
    if (target.closest('#back-setup') || target.closest('#choose-theme')) { state.screen='setup'; state.modal=null; state.ready=null; state.placed=[]; render(); window.scrollTo(0,0); return; }
    if (target.closest('#close-modal') || target.closest('#close-modal-primary') || target.closest('#skip-question') || target.closest('#view-scene')) { closeModal(); return; }
    if (target.closest('#new-round')) { resetRound(); return; }
    const answer=target.closest('#answer-done');
    if (answer) { state.ready=answer.dataset.id; closeModal(); return; }
    const remove=target.closest('#remove-item');
    if (remove) { state.placed=state.placed.filter(placed=>placed.id!==remove.dataset.id); state.completed=false; closeModal(); return; }
    if (state.modal) return;
    if (Date.now() < state.suppressClickUntil) return;
    const placed=target.closest('[data-placed]');
    if (placed) { openQuestion(placed.dataset.placed,'placed'); return; }
    const card=target.closest('[data-item]');
    if (card && !card.disabled) { if (state.ready !== card.dataset.item) openQuestion(card.dataset.item); return; }
    const area=target.closest('#scene-area');
    if (area && state.ready) placeReady(positionFor(event,area));
  });

  function createDragGhost(item, x, y) {
    const ghost=document.createElement('div');
    ghost.className='placed-item'; ghost.style.cssText=`position:fixed;left:${x}px;top:${y}px;z-index:60;pointer-events:none;opacity:.85`;
    ghost.textContent=item.icon; document.body.appendChild(ghost); return ghost;
  }
  root.addEventListener('pointerdown', event => {
    if (state.screen!=='game' || state.modal || event.button!==0) return;
    const placed=event.target.closest('[data-placed]');
    const readyCard=event.target.closest('[data-item]');
    if (placed) state.drag={id:placed.dataset.placed,from:'scene',startX:event.clientX,startY:event.clientY,moved:false,ghost:null};
    else if (readyCard && readyCard.dataset.item===state.ready) state.drag={id:state.ready,from:'inventory',startX:event.clientX,startY:event.clientY,moved:false,ghost:null};
    else return;
    event.preventDefault();
  });
  document.addEventListener('pointermove', event => {
    if (!state.drag) return;
    const drag=state.drag;
    if (!drag.moved && Math.hypot(event.clientX-drag.startX,event.clientY-drag.startY)>7) {
      drag.moved=true; drag.ghost=createDragGhost(itemById(drag.id),event.clientX,event.clientY);
    }
    if (drag.ghost) { drag.ghost.style.left=event.clientX+'px'; drag.ghost.style.top=event.clientY+'px'; }
  });
  document.addEventListener('pointerup', event => {
    if (!state.drag) return;
    const drag=state.drag; state.drag=null;
    drag.ghost?.remove();
    if (!drag.moved) return;
    state.suppressClickUntil=Date.now()+350;
    const area=document.getElementById('scene-area');
    if (!area) return;
    const rect=area.getBoundingClientRect();
    if (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) return;
    const pos=avoidOverlap(positionFor(event,area),drag.id);
    if (drag.from==='inventory') placeReady(pos);
    else { const placed=state.placed.find(entry=>entry.id===drag.id); if (placed) { placed.x=pos.x; placed.y=pos.y; render(); } }
  });
  document.addEventListener('pointercancel', () => { state.drag?.ghost?.remove(); state.drag=null; });
  document.addEventListener('keydown', event => {
    if (event.key==='Escape' && state.modal) closeModal();
  });
  render();
})();

