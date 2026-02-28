

// ════════════════════════════════════════════════════
//  BASE DE DATOS — localStorage
// ════════════════════════════════════════════════════
const DB_KEY = 'rj_articulos_v3';

const DEFAULTS = [
  {id:1,titulo:"Nueva campaña de vacunación llega a Jamundí",categoria:"SALUD",autor:"Dra. Sandra Peña",fecha:"28 de febrero de 2026",tiempoLectura:"4 min",imagen:"radio jamundi logo.png",resumen:"El municipio lanza una nueva jornada de vacunación gratuita para toda la población.",cuerpo:"<p>El municipio de Jamundí anunció el inicio de una nueva campaña de vacunación gratuita dirigida a niños, adultos mayores y población vulnerable.</p><p>La jornada se realizará durante los próximos tres fines de semana en el Hospital Piloto de Jamundí y centros de atención de los barrios El Vergel, La Esperanza y Villa del Sur.</p><h3>¿Qué vacunas estarán disponibles?</h3><p>Se aplicarán vacunas contra la influenza estacional, la hepatitis B y el refuerzo del COVID-19 para mayores de 60 años.</p><blockquote>\"Esta campaña busca llegar a las familias que no han podido acceder a vacunación. Es un derecho de todos los jamundeños.\" — Dra. Sandra Peña</blockquote><p>Atención de 8am a 4pm sin cita previa. Solo se requiere documento de identidad.</p>",tags:["salud","vacunación","jamundí"],relacionados:[2,4,5]},
  {id:2,titulo:"Alcaldía de Jamundí anuncia plan de obras para 2026",categoria:"POLÍTICA",autor:"Carlos Ruiz",fecha:"27 de febrero de 2026",tiempoLectura:"5 min",imagen:"radio jamundi logo.png",resumen:"El alcalde presentó un plan de $45.000 millones en vías, parques y acueductos.",cuerpo:"<p>El alcalde de Jamundí presentó el Plan de Obras 2026, una inversión de $45.000 millones para mejorar la infraestructura municipal.</p><p>Incluye pavimentación de 18 km de vías, dos parques biosaludables y ampliación del acueducto en la zona alta.</p><h3>Inversión por sectores</h3><p>40% vial, 25% saneamiento básico, 20% equipamientos comunitarios, 15% conectividad digital.</p><blockquote>\"Jamundí merece obras de calidad. Cada peso bajo estricta vigilancia ciudadana.\" — Alcalde de Jamundí</blockquote>",tags:["política","obras","alcaldía","jamundí"],relacionados:[1,4,7]},
  {id:3,titulo:"Deportivo Cali cierra fichajes para el segundo semestre",categoria:"DEPORTES",autor:"Juan López",fecha:"27 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"El equipo verdiblanco confirmó tres nuevas contrataciones de cara a la Liga BetPlay 2026.",cuerpo:"<p>El Deportivo Cali confirmó tres nuevos fichajes: el delantero uruguayo Matías Fernández, el mediocampista venezolano Carlos Medina y el portero James Ospino del Junior de Barranquilla.</p><blockquote>\"Llegan jugadores con hambre de triunfo. Estamos construyendo algo importante.\" — Director técnico Deportivo Cali</blockquote><p>Presentación oficial el próximo lunes en el Estadio Deportivo Cali. El equipo debuta el 8 de marzo visitando a Nacional.</p>",tags:["deportes","fútbol","deportivo cali"],relacionados:[8,9,10]},
  {id:4,titulo:"Colombia hoy: las decisiones más importantes del día",categoria:"NOTICIAS",autor:"Redacción Noticias",fecha:"27 de febrero de 2026",tiempoLectura:"6 min",imagen:"radio jamundi logo.png",resumen:"Resumen de los eventos más importantes que marcaron la agenda nacional hoy.",cuerpo:"<p>Este viernes estuvo marcado por decisiones clave en lo político, económico y social.</p><h3>En el ámbito político</h3><p>El Congreso aprobó la ley de trabajo remoto que beneficia a más de 2 millones de colombianos.</p><h3>En economía</h3><p>El Banco de la República anunció inflación de 4,2% anual, la más baja en tres años.</p><blockquote>\"Los indicadores muestran una economía que se recupera de forma sostenida.\" — Gerente Banco de la República</blockquote><h3>En seguridad</h3><p>Reducción del 15% en índices de violencia en las principales ciudades durante enero.</p>",tags:["colombia","noticias","nacional","economía"],relacionados:[1,2,7]},
  {id:5,titulo:"Valle del Cauca crece un 12% en exportaciones agroindustriales",categoria:"NEGOCIOS",autor:"Redacción Económica",fecha:"26 de febrero de 2026",tiempoLectura:"4 min",imagen:"radio jamundi logo.png",resumen:"Azúcar, papel y confitería lideran las ventas externas del departamento en el primer bimestre.",cuerpo:"<p>El Valle del Cauca reportó un incremento del 12% en exportaciones agroindustriales en los primeros dos meses de 2026, según la Cámara de Comercio de Cali.</p><h3>Destinos principales</h3><p>Estados Unidos, Ecuador y Perú lideran, con nuevo crecimiento hacia Vietnam y Malasia.</p><blockquote>\"La diversificación de mercados es clave para la sostenibilidad de nuestro sector.\" — Presidente Cámara de Comercio de Cali</blockquote>",tags:["economía","exportaciones","valle del cauca"],relacionados:[4,2,6]},
  {id:6,titulo:"Festival Petronio Álvarez regresa a Cali con más de 400 grupos",categoria:"CULTURA",autor:"Redacción Cultura",fecha:"27 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"La gran fiesta de la música del Pacífico se realizará del 12 al 17 de agosto. Entrada gratuita.",cuerpo:"<p>El Festival Petronio Álvarez 2026 se realizará del 12 al 17 de agosto en el Estadio Pascual Guerrero, con más de 400 agrupaciones de Chocó, Valle, Cauca y Nariño.</p><h3>Categorías en competencia</h3><p>Marimba, chirimía, violines caucanos, versión libre y agrupación libre. Nuevo espacio para la diáspora afrocolombiana.</p><blockquote>\"El Petronio es la fiesta más grande de la cultura afrocolombiana.\" — Directora del Festival</blockquote><p>Inscripciones hasta el 30 de abril. Entrada gratuita en todos los escenarios.</p>",tags:["cultura","música","petronio álvarez","cali"],relacionados:[11,12,13]},
  {id:7,titulo:"Congreso aprueba ley de trabajo remoto",categoria:"POLÍTICA",autor:"Redacción Política",fecha:"26 de febrero de 2026",tiempoLectura:"4 min",imagen:"radio jamundi logo.png",resumen:"La normativa regula el teletrabajo y los derechos de más de 2 millones de trabajadores.",cuerpo:"<p>El Congreso aprobó la ley de trabajo remoto, vigente desde el 1 de abril de 2026.</p><h3>Puntos clave</h3><p>Derecho a desconexión digital, gastos de internet a cargo del empleador e igualdad salarial presencial-remoto.</p><blockquote>\"Los trabajadores remotos merecen los mismos derechos que los presenciales.\" — Ponente del proyecto</blockquote>",tags:["política","congreso","trabajo remoto"],relacionados:[4,2,5]},
  {id:8,titulo:"Liga BetPlay 2026: arranque del segundo semestre",categoria:"DEPORTES",autor:"Redacción Deportes",fecha:"26 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"Deportivo Cali debuta el 8 de marzo visitando a Atlético Nacional.",cuerpo:"<p>La Dimayor confirmó el fixture del segundo semestre de la Liga BetPlay 2026. Arranca el 8 de marzo con el clásico Nacional vs Cali en el Atanasio Girardot.</p><blockquote>\"Este semestre tendremos un torneo muy parejo.\" — Presidente de la Dimayor</blockquote><p>La final está programada para junio de 2026.</p>",tags:["deportes","fútbol","liga betplay"],relacionados:[3,9,10]},
  {id:9,titulo:"Colombia convoca para la siguiente fecha de eliminatorias",categoria:"DEPORTES",autor:"Redacción Deportes",fecha:"25 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"26 convocados para enfrentar a Brasil y Paraguay en la doble fecha de marzo.",cuerpo:"<p>La Selección Colombia confirmó 26 convocados para la doble fecha del 24 y 29 de marzo contra Brasil en Barranquilla y Paraguay en Asunción.</p><blockquote>\"Vamos con todo. Necesitamos los seis puntos.\" — Seleccionador nacional</blockquote><p>Colombia es cuarto con 22 puntos, a 4 de Uruguay.</p>",tags:["deportes","selección colombia","eliminatorias"],relacionados:[3,8,10]},
  {id:10,titulo:"Colombianos brillan en las clásicas europeas de primavera",categoria:"DEPORTES",autor:"Redacción Deportes",fecha:"24 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"Los escarabajos protagonizan los primeros grandes resultados de la temporada.",cuerpo:"<p>Egan Bernal terminó top 5 en la última clásica belga. Nairo Quintana brilló en la Tirreno-Adriático y Daniel Martínez ganó una etapa en la París-Niza.</p><blockquote>\"El ciclismo colombiano sigue siendo potencia mundial.\" — Director de equipo</blockquote>",tags:["deportes","ciclismo","colombia","europa"],relacionados:[3,8,9]},
  {id:11,titulo:"Nueva exposición en el Museo La Tertulia",categoria:"CULTURA",autor:"Redacción Cultura",fecha:"26 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"La muestra reúne 80 obras de artistas del Pacífico colombiano.",cuerpo:"<p>El Museo La Tertulia inauguró \"Raíces y Horizontes\", con más de 80 obras de 25 artistas del Pacífico: pinturas de gran formato, esculturas en madera y fotografías documentales.</p><blockquote>\"Esta exposición reconoce una región históricamente invisibilizada.\" — Directora del Museo</blockquote><p>Abierta hasta el 30 de abril. Martes a domingo, 10am-6pm. Entrada: $8.000.</p>",tags:["cultura","arte","museo la tertulia","cali"],relacionados:[6,12,13]},
  {id:12,titulo:"Película colombiana seleccionada para Cannes 2026",categoria:"CULTURA",autor:"Redacción Cultura",fecha:"25 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"El largometraje rodado en el Pacífico colombiano va a la sección Un Certain Regard.",cuerpo:"<p>\"El río que nos habita\" de la cineasta caleña Valentina Mosquera fue seleccionada para Un Certain Regard de Cannes 2026. Rodada en el Baudó chocoano con actores no profesionales.</p><blockquote>\"Esta película no es solo mía. Es de la comunidad que confió en nosotros.\" — Valentina Mosquera</blockquote>",tags:["cultura","cine","cannes","colombia"],relacionados:[6,11,13]},
  {id:13,titulo:"Feria Internacional del Libro de Bogotá abre en abril",categoria:"CULTURA",autor:"Redacción Cultura",fecha:"24 de febrero de 2026",tiempoLectura:"3 min",imagen:"radio jamundi logo.png",resumen:"La FILBO 2026 tendrá a Portugal como invitado de honor con más de 600 actividades.",cuerpo:"<p>La FILBO 2026 abre el 23 de abril en Corferias con Portugal como invitado de honor, más de 600 actividades y editoriales de 40 países. Se esperan 400.000 visitantes.</p><blockquote>\"Colombia es un país de lectores. La FILBO es nuestra mejor carta de presentación.\" — Director FILBO</blockquote>",tags:["cultura","literatura","filbo","bogotá"],relacionados:[6,11,12]},
  {id:14,titulo:"Sabores del Valle: los mejores platos de nuestra cocina",categoria:"CULTURA",autor:"Redacción Cultura",fecha:"23 de febrero de 2026",tiempoLectura:"4 min",imagen:"radio jamundi logo.png",resumen:"Chuleta valluna, sancocho de gallina y aborrajados encabezan los platos más representativos.",cuerpo:"<p>La gastronomía del Valle fusiona tradiciones indígenas, africanas y españolas. La chuleta valluna es el plato emblema: cerdo apanado y frito con arroz, frijoles y patacones.</p><h3>El sancocho de gallina criolla</h3><p>Preparado en fogón de leña con gallina criolla, yuca, plátano y mazorca. Es reunión familiar, domingo en el campo.</p><blockquote>\"Nuestra cocina es nuestra historia.\" — Chef vallecaucana</blockquote>",tags:["cultura","gastronomía","valle del cauca"],relacionados:[6,11,12]}
];

// ── API ────────────────────────────────────────────────
function dbGetAll() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) {
      localStorage.setItem(DB_KEY, JSON.stringify(DEFAULTS));
      return JSON.parse(JSON.stringify(DEFAULTS));
    }
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length === 0) {
      localStorage.setItem(DB_KEY, JSON.stringify(DEFAULTS));
      return JSON.parse(JSON.stringify(DEFAULTS));
    }
    return arr;
  } catch(e) {
    return JSON.parse(JSON.stringify(DEFAULTS));
  }
}

function dbGetById(id) {
  return dbGetAll().find(a => a.id === Number(id)) || null;
}

function dbSave(art) {
  const todos = dbGetAll();
  // Si no tiene id o id es 0/null → artículo NUEVO
  if (!art.id) {
    art.id = todos.reduce((m, a) => Math.max(m, a.id || 0), 0) + 1;
    todos.unshift(art);
  } else {
    const idx = todos.findIndex(a => a.id === Number(art.id));
    if (idx !== -1) todos[idx] = art;
    else { art.id = todos.reduce((m,a)=>Math.max(m,a.id||0),0)+1; todos.unshift(art); }
  }
  localStorage.setItem(DB_KEY, JSON.stringify(todos));
  return art;
}

function dbDelete(id) {
  const todos = dbGetAll().filter(a => a.id !== Number(id));
  localStorage.setItem(DB_KEY, JSON.stringify(todos));
}

const CATS_DB = ["SALUD","POLÍTICA","DEPORTES","CULTURA","NOTICIAS","NEGOCIOS","REGIONAL","NACIONAL","EVENTOS"];

// ════════════════════════════════════════════════════
//  RENDERIZADO DINÁMICO
// ════════════════════════════════════════════════════
function renderHome() {
  const todos = dbGetAll();

  // Sidebar hero
  const side = document.getElementById('heroSide');
  if (side) {
    side.innerHTML = todos.slice(0,5).map((a,i) => `
      <div class="side_item" onclick="openArticle(${a.id})" style="cursor:pointer">
        <div class="side_item_num">${String(i+1).padStart(2,'0')}</div>
        <div class="side_item_body">
          <div class="side_item_title">${a.titulo}</div>
          <div class="side_item_desc">${a.resumen.substring(0,70)}${a.resumen.length>70?'…':''}</div>
          <div class="site_item_date">${a.fecha}</div>
        </div>
      </div>`).join('');
  }

  // Grid últimas noticias
  const grid = document.getElementById('homeNewsGrid');
  if (grid) {
    grid.innerHTML = todos.slice(0,3).map(a => `
      <div class="news_card" onclick="openArticle(${a.id})" style="cursor:pointer">
        <div><img src="${a.imagen}" alt="${a.titulo}" onerror="this.src='radio jamundi logo.png'"></div>
        <div class="new_card_cat">${a.categoria}</div>
        <div class="new_card_title"><span>${a.titulo}</span></div>
        <p class="card_text">${a.resumen.substring(0,100)}${a.resumen.length>100?'…':''}</p>
        <div class="autor">${a.autor} · ${a.fecha}</div>
      </div>`).join('');
  }

  // Grids de categoría
  const mapGrid = {
    gridNoticias: ['NOTICIAS'],
    gridDeportes: ['DEPORTES'],
    gridCultura:  ['CULTURA'],
    gridPolitica: ['POLÍTICA']
  };
  Object.entries(mapGrid).forEach(([gridId, cats]) => {
    const el = document.getElementById(gridId);
    if (!el) return;
    const arts = todos.filter(a => cats.includes(a.categoria));
    if (!arts.length) { el.innerHTML = '<p style="color:#555;padding:40px;text-align:center">No hay artículos en esta categoría aún.</p>'; return; }
    const [dest, ...resto] = arts;
    let html = `
      <div class="cat_card featured" onclick="openArticle(${dest.id})" style="cursor:pointer">
        <div class="cat_card_img"><img src="${dest.imagen}" alt="${dest.titulo}" onerror="this.src='radio jamundi logo.png'"></div>
        <div class="cat_card_body">
          <div class="cat_card_cat">DESTACADO</div>
          <div class="cat_card_title">${dest.titulo}</div>
          <p class="cat_card_text">${dest.resumen}</p>
          <div class="autor">${dest.fecha} · ${dest.autor}</div>
        </div>
      </div>`;
    for (let i=0; i<resto.length; i+=2) {
      const par = resto.slice(i,i+2);
      html += `<div class="cat_subgrid">${par.map(a=>`
        <div class="cat_card" onclick="openArticle(${a.id})" style="cursor:pointer">
          <div class="cat_card_img"><img src="${a.imagen}" alt="${a.titulo}" onerror="this.src='radio jamundi logo.png'"></div>
          <div class="cat_card_body">
            <div class="cat_card_cat">${a.categoria}</div>
            <div class="cat_card_title">${a.titulo}</div>
            <p class="cat_card_text">${a.resumen.substring(0,90)}…</p>
            <div class="autor">${a.fecha}</div>
          </div>
        </div>`).join('')}</div>`;
    }
    el.innerHTML = html;
  });
}

// ════════════════════════════════════════════════════
//  ABRIR / CERRAR ARTÍCULO
// ════════════════════════════════════════════════════
function openArticle(id) {
  const art = dbGetById(id);
  if (!art) { alert('Artículo no encontrado. ID: '+id); return; }

  // Guardar página anterior
  const vis = [...document.querySelectorAll('.homePage,.page_cat')].find(el=>el.offsetParent!==null);
  sessionStorage.setItem('paginaAnterior', vis ? vis.id||'home' : 'home');

  // Ocultar todo
  document.querySelectorAll('.homePage,.page_cat,#adminPage').forEach(el=>el.style.display='none');

  // Relacionados
  const rels = (art.relacionados||[]).map(rid=>dbGetById(rid)).filter(Boolean);
  const relHTML = rels.length
    ? rels.map(r=>`<div class="art-rel-card" onclick="openArticle(${r.id})"><div class="art-rel-img"><img src="${r.imagen}" onerror="this.src='radio jamundi logo.png'"><span class="art-rel-cat">${r.categoria}</span></div><div class="art-rel-body"><div class="art-rel-title">${r.titulo}</div><div class="art-rel-meta">${r.autor} · ${r.fecha}</div></div></div>`).join('')
    : '<p class="art-no-rel">No hay artículos relacionados.</p>';

  const tagsHTML = (art.tags||[]).map(t=>`<span class="art-tag">#${t}</span>`).join('');

  const pg = document.getElementById('articlePage');
  pg.innerHTML = `
    <div class="article-wrap">
      <div class="article-breadcrumb">
        <a onclick="closeArticle()">Inicio</a><span>›</span>
        <a onclick="closeArticle();mostrarCat('${art.categoria}')">${art.categoria}</a><span>›</span>
        <span>${art.titulo.substring(0,45)}${art.titulo.length>45?'…':''}</span>
      </div>
      <div class="article-top-tag">${art.categoria}</div>
      <h1 class="article-title">${art.titulo}</h1>
      <p class="article-deck">${art.resumen}</p>
      <div class="article-meta">
        <span class="author">✍ ${art.autor}</span>
        <span style="color:#2e2e2e">·</span>
        <span>🕐 ${art.tiempoLectura||'3 min'}</span>
        <span style="color:#2e2e2e">·</span>
        <span>📅 ${art.fecha}</span>
      </div>
      <div class="article-hero-img">
        <img src="${art.imagen}" alt="${art.titulo}" onerror="this.style.display='none'">
      </div>
      <p class="article-img-caption">📷 Imagen ilustrativa · Radio Jamundí</p>
      <div class="article-body">${art.cuerpo}</div>
      <div class="art-tags">${tagsHTML}</div>
      <button class="article-back-btn" onclick="closeArticle()">← Volver a ${art.categoria}</button>
    </div>
    <section class="art-relacionados">
      <div class="art-rel-inner">
        <h2 class="art-rel-heading"><span class="art-rel-line"></span>Artículos relacionados<span class="art-rel-line"></span></h2>
        <div class="art-rel-grid">${relHTML}</div>
      </div>
    </section>`;
  pg.style.display = 'block';
  window.scrollTo({top:0,behavior:'smooth'});
}

function closeArticle() {
  document.getElementById('articlePage').style.display = 'none';
  const ant = sessionStorage.getItem('paginaAnterior')||'home';
  if (ant === 'home' || ant === 'homePage') {
    document.querySelector('.homePage').style.display = 'block';
  } else {
    const el = document.getElementById(ant);
    if (el) el.style.display = 'block';
    else document.querySelector('.homePage').style.display = 'block';
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function mostrarCat(cat) {
  const map = {NOTICIAS:'catNoticias',SALUD:'catNoticias',NEGOCIOS:'catNoticias',REGIONAL:'catNoticias',NACIONAL:'catNoticias',EVENTOS:'catNoticias',DEPORTES:'catDeportes',CULTURA:'catCultura','POLÍTICA':'catPolitica'};
  const id = map[cat];
  if (id) { document.getElementById(id).style.display='block'; }
  else { document.querySelector('.homePage').style.display='block'; }
}

// ════════════════════════════════════════════════════
//  NAVEGACIÓN
// ════════════════════════════════════════════════════
function showHome(seccion) {
  document.querySelectorAll('.homePage,.page_cat,#articlePage,#adminPage').forEach(el=>el.style.display='none');
  if (!seccion) { document.querySelector('.homePage').style.display='block'; return; }
  const map = {noticias:'catNoticias',deportes:'catDeportes',cultura:'catCultura',politica:'catPolitica'};
  const el = document.getElementById(map[seccion]);
  if (el) el.style.display = 'block';
}
function goHome() { showHome(); }
function setActive(el) {
  document.querySelectorAll('.nav_linka a').forEach(a=>a.classList.remove('active'));
  el.classList.add('active');
}

// ════════════════════════════════════════════════════
//  PANEL DE ADMINISTRACIÓN
// ════════════════════════════════════════════════════
const ADMIN_PASS = 'jamundi2026';
let _art = null; // artículo en edición

function abrirAdmin() {
  const clave = prompt('🔐 Contraseña de administrador:');
  if (clave === null) return;
  if (clave !== ADMIN_PASS) { alert('Contraseña incorrecta.'); return; }
  document.querySelectorAll('.homePage,.page_cat,#articlePage').forEach(el=>el.style.display='none');
  document.getElementById('adminPage').style.display = 'block';
  adminLista();
}

function cerrarAdmin() {
  document.getElementById('adminPage').style.display = 'none';
  _art = null;
  renderHome();
  document.querySelector('.homePage').style.display = 'block';
  window.scrollTo({top:0,behavior:'smooth'});
}

function adminLista() {
  _art = null;
  const todos = dbGetAll();
  const pg = document.getElementById('adminPage');

  const filas = todos.length
    ? todos.map(a=>`
        <tr onmouseover="this.style.background='#121212'" onmouseout="this.style.background=''">
          <td style="padding:12px 14px;font-family:monospace;font-size:.75em;color:#444">#${a.id}</td>
          <td style="padding:12px 14px"><span style="background:#1e1e1e;border:1px solid #2a2a2a;color:#c8b890;font-size:.62em;letter-spacing:.14em;font-weight:700;padding:3px 9px;border-radius:2px;text-transform:uppercase">${a.categoria}</span></td>
          <td style="padding:12px 14px">
            <div style="font-weight:600;color:#ddd;margin-bottom:3px">${a.titulo}</div>
            <div style="font-size:.75em;color:#555">${a.autor} · ${a.fecha}</div>
          </td>
          <td style="padding:12px 14px;text-align:right;white-space:nowrap">
            <button onclick="adminEditar(${a.id})" style="background:transparent;border:1px solid #3a3020;color:#c8b890;padding:5px 10px;font-family:inherit;font-size:.72em;border-radius:2px;cursor:pointer;margin-left:4px">✏ Editar</button>
            <button onclick="adminBorrar(${a.id})" style="background:transparent;border:1px solid #3a1a14;color:#c0604a;padding:5px 10px;font-family:inherit;font-size:.72em;border-radius:2px;cursor:pointer;margin-left:4px">🗑 Borrar</button>
          </td>
        </tr>`).join('')
    : `<tr><td colspan="4" style="text-align:center;padding:48px;color:#444">No hay artículos. Crea el primero.</td></tr>`;

  pg.innerHTML = `
    <div style="background:#0f0f0f;border-bottom:1px solid #1e1e1e;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;position:sticky;top:0;z-index:100;font-family:'Arial Narrow',sans-serif">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:38px;height:38px;background:#c8b890;color:#111;font-weight:900;display:flex;align-items:center;justify-content:center;border-radius:3px;font-size:.9em">RJ</div>
        <div>
          <div style="font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#f0ece0">Panel de Administración</div>
          <div style="font-size:.72em;color:#555">${todos.length} artículo${todos.length!==1?'s':''}</div>
        </div>
      </div>
      <div style="display:flex;gap:10px">
        <button onclick="adminNuevo()" style="background:#c8b890;color:#111;border:none;padding:9px 18px;font-family:inherit;font-size:.82em;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:3px;cursor:pointer">+ Nuevo artículo</button>
        <button onclick="cerrarAdmin()" style="background:transparent;color:#888;border:1px solid #2e2e2e;padding:9px 14px;font-family:inherit;font-size:.8em;border-radius:3px;cursor:pointer">✕ Cerrar</button>
      </div>
    </div>
    <div style="padding:24px;font-family:'Arial Narrow',sans-serif">
      <div style="background:#0f0f0f;border:1px solid #1e1e1e;border-radius:4px;overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.87em">
          <thead><tr style="background:#141414;border-bottom:1px solid #2a2a2a">
            <th style="padding:11px 14px;text-align:left;font-size:.68em;letter-spacing:.15em;color:#555;text-transform:uppercase">ID</th>
            <th style="padding:11px 14px;text-align:left;font-size:.68em;letter-spacing:.15em;color:#555;text-transform:uppercase">Cat.</th>
            <th style="padding:11px 14px;text-align:left;font-size:.68em;letter-spacing:.15em;color:#555;text-transform:uppercase">Artículo</th>
            <th style="padding:11px 14px;text-align:right;font-size:.68em;letter-spacing:.15em;color:#555;text-transform:uppercase">Acciones</th>
          </tr></thead>
          <tbody style="border-collapse:collapse">${filas}</tbody>
        </table>
      </div>
    </div>`;
}

function adminNuevo() {
  _art = {id:null,titulo:'',categoria:'NOTICIAS',autor:'',fecha:_hoy(),tiempoLectura:'3 min',imagen:'radio jamundi logo.png',resumen:'',cuerpo:'',tags:[],relacionados:[]};
  adminEditor();
}

function adminEditar(id) {
  const a = dbGetById(id);
  if (!a) { rjToast('Artículo no encontrado','err'); return; }
  _art = {...a, tags:[...(a.tags||[])], relacionados:[...(a.relacionados||[])]};
  adminEditor();
}

function adminBorrar(id) {
  const a = dbGetById(id);
  if (!a || !confirm(`¿Eliminar "${a.titulo}"?\nEsta acción no se puede deshacer.`)) return;
  dbDelete(id);
  renderHome();
  adminLista();
  rjToast('Artículo eliminado.');
}

function adminEditor() {
  const a = _art;
  const esNuevo = !a.id;
  const pg = document.getElementById('adminPage');

  const opCat = CATS_DB.map(c=>`<option value="${c}"${c===a.categoria?' selected':''}>${c}</option>`).join('');
  const otros = dbGetAll().filter(x => x.id && x.id !== a.id);
  const opRel = otros.length
    ? otros.map(x=>`<option value="${x.id}"${(a.relacionados||[]).includes(x.id)?' selected':''}>#${x.id} ${x.titulo.substring(0,40)}</option>`).join('')
    : '<option disabled>No hay otros artículos</option>';

  const S = (s='')=>(s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  pg.innerHTML = `
    <div style="background:#0f0f0f;border-bottom:1px solid #1e1e1e;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;position:sticky;top:0;z-index:100;font-family:'Arial Narrow',sans-serif">
      <div style="display:flex;align-items:center;gap:12px">
        <button onclick="adminLista()" style="background:transparent;border:1px solid #2e2e2e;color:#c8b890;padding:7px 14px;font-family:inherit;font-size:.78em;border-radius:3px;cursor:pointer">← Volver</button>
        <div style="font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#f0ece0;font-size:.95em">${esNuevo?'Nuevo artículo':'Editando #'+a.id}</div>
      </div>
      <button onclick="adminGuardar()" style="background:#c8b890;color:#111;border:none;padding:9px 20px;font-family:inherit;font-size:.82em;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:3px;cursor:pointer">💾 Guardar</button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 260px;gap:20px;padding:20px 24px 60px;font-family:'Arial Narrow',sans-serif">

      <div style="display:flex;flex-direction:column;gap:16px">

        <div><label style="display:block;font-size:.68em;letter-spacing:.13em;text-transform:uppercase;color:#555;margin-bottom:5px">Titular *</label>
        <input id="e_titulo" value="${S(a.titulo)}" placeholder="Escribe el titular..."
          style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:11px 13px;font-family:Georgia,serif;font-size:1.05em;font-weight:700;border-radius:3px;outline:none"
          oninput="_art.titulo=this.value" onfocus="this.style.borderColor='#c8b890'" onblur="this.style.borderColor='#262626'"></div>

        <div><label style="display:block;font-size:.68em;letter-spacing:.13em;text-transform:uppercase;color:#555;margin-bottom:5px">Resumen *</label>
        <textarea id="e_resumen" rows="3" placeholder="Texto breve que aparece en las tarjetas..."
          style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:10px 13px;font-family:Georgia,serif;font-size:.9em;border-radius:3px;outline:none;resize:vertical;line-height:1.6"
          oninput="_art.resumen=this.value" onfocus="this.style.borderColor='#c8b890'" onblur="this.style.borderColor='#262626'">${S(a.resumen)}</textarea></div>

        <div>
          <label style="display:block;font-size:.68em;letter-spacing:.13em;text-transform:uppercase;color:#555;margin-bottom:5px">Cuerpo del artículo * <span style="text-transform:none;letter-spacing:0;font-size:.9em;color:#333">— HTML: &lt;p&gt; &lt;h3&gt; &lt;blockquote&gt; &lt;strong&gt;</span></label>
          <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:6px">
            ${[['p','¶ P'],['h3','H3'],['bq','" Cita'],['b','B'],['i','I'],['ul','Lista']].map(([t,l])=>`<button type="button" onclick="adminFmt('${t}')" style="background:#161616;border:1px solid #2a2a2a;color:#888;padding:5px 9px;font-family:inherit;font-size:.72em;border-radius:2px;cursor:pointer">${l}</button>`).join('')}
          </div>
          <textarea id="e_cuerpo" rows="16" placeholder="<p>Escribe el cuerpo completo aquí...</p>"
            style="width:100%;box-sizing:border-box;background:#0c0c0c;border:1px solid #262626;color:#a8d098;padding:10px 13px;font-family:'Courier New',monospace;font-size:.82em;border-radius:3px;outline:none;resize:vertical;line-height:1.7"
            oninput="_art.cuerpo=this.value" onfocus="this.style.borderColor='#c8b890'" onblur="this.style.borderColor='#262626'">${S(a.cuerpo)}</textarea>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;position:sticky;top:80px">

        <div style="background:#0f0f0f;border:1px solid #1e1e1e;border-radius:4px;padding:14px">
          <div style="font-size:.68em;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #1e1e1e">📋 Información</div>
          <div style="margin-bottom:10px"><label style="display:block;font-size:.65em;letter-spacing:.1em;text-transform:uppercase;color:#555;margin-bottom:4px">Categoría</label>
          <select id="e_cat" onchange="_art.categoria=this.value" style="width:100%;background:#111;border:1px solid #262626;color:#e0dbd0;padding:8px 10px;font-family:inherit;font-size:.85em;border-radius:3px;outline:none">${opCat}</select></div>
          <div style="margin-bottom:10px"><label style="display:block;font-size:.65em;letter-spacing:.1em;text-transform:uppercase;color:#555;margin-bottom:4px">Autor *</label>
          <input id="e_autor" value="${S(a.autor)}" placeholder="Nombre del autor" oninput="_art.autor=this.value"
            style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:8px 10px;font-family:inherit;font-size:.85em;border-radius:3px;outline:none"></div>
          <div style="margin-bottom:10px"><label style="display:block;font-size:.65em;letter-spacing:.1em;text-transform:uppercase;color:#555;margin-bottom:4px">Fecha</label>
          <input id="e_fecha" value="${S(a.fecha)}" placeholder="28 de febrero de 2026" oninput="_art.fecha=this.value"
            style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:8px 10px;font-family:inherit;font-size:.85em;border-radius:3px;outline:none"></div>
          <div><label style="display:block;font-size:.65em;letter-spacing:.1em;text-transform:uppercase;color:#555;margin-bottom:4px">Lectura</label>
          <input id="e_lectura" value="${S(a.tiempoLectura||'3 min')}" placeholder="3 min" oninput="_art.tiempoLectura=this.value"
            style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:8px 10px;font-family:inherit;font-size:.85em;border-radius:3px;outline:none"></div>
        </div>

        <div style="background:#0f0f0f;border:1px solid #1e1e1e;border-radius:4px;padding:14px">
          <div style="font-size:.68em;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #1e1e1e">🖼 Imagen</div>
          <input id="e_img" value="${S(a.imagen)}" placeholder="ruta o URL de imagen"
            style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:8px 10px;font-family:inherit;font-size:.8em;border-radius:3px;outline:none;margin-bottom:8px"
            oninput="_art.imagen=this.value;document.getElementById('e_imgprev').src=this.value">
          <div style="height:90px;border-radius:3px;overflow:hidden;background:#1a1a1a">
            <img id="e_imgprev" src="${S(a.imagen)}" onerror="this.src='radio jamundi logo.png'" style="width:100%;height:100%;object-fit:cover">
          </div>
        </div>

        <div style="background:#0f0f0f;border:1px solid #1e1e1e;border-radius:4px;padding:14px">
          <div style="font-size:.68em;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #1e1e1e">🏷 Tags</div>
          <input id="e_tags" value="${(a.tags||[]).join(', ')}" placeholder="salud, vacunación..."
            style="width:100%;box-sizing:border-box;background:#111;border:1px solid #262626;color:#e0dbd0;padding:8px 10px;font-family:inherit;font-size:.8em;border-radius:3px;outline:none"
            oninput="_art.tags=this.value.split(',').map(t=>t.trim()).filter(Boolean)">
        </div>

        <div style="background:#0f0f0f;border:1px solid #1e1e1e;border-radius:4px;padding:14px">
          <div style="font-size:.68em;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #1e1e1e">🔗 Relacionados</div>
          <small style="color:#444;font-size:.72em;display:block;margin-bottom:6px">Ctrl+clic para varios</small>
          <select id="e_rel" multiple style="width:100%;height:110px;background:#111;border:1px solid #262626;color:#e0dbd0;padding:6px;font-family:inherit;font-size:.78em;border-radius:3px;outline:none"
            onchange="_art.relacionados=Array.from(this.selectedOptions).map(o=>Number(o.value))">${opRel}</select>
        </div>

      </div>
    </div>`;
}

function adminGuardar() {
  if (!_art.titulo||!_art.titulo.trim()) { rjToast('El titular es obligatorio','err'); return; }
  if (!_art.resumen||!_art.resumen.trim()) { rjToast('El resumen es obligatorio','err'); return; }
  if (!_art.cuerpo||!_art.cuerpo.trim()) { rjToast('El cuerpo es obligatorio','err'); return; }
  if (!_art.autor||!_art.autor.trim()) { rjToast('El autor es obligatorio','err'); return; }

  const guardado = dbSave(_art);
  _art = null;
  renderHome();     // ← actualiza el index inmediatamente
  adminLista();
  rjToast('✓ Artículo #'+guardado.id+' guardado.');
}

function adminFmt(t) {
  const ta = document.getElementById('e_cuerpo');
  if (!ta) return;
  const sel = ta.value.substring(ta.selectionStart, ta.selectionEnd)||'Texto aquí';
  const map = {p:`<p>${sel}</p>`,h3:`<h3>${sel}</h3>`,bq:`<blockquote>${sel}</blockquote>`,b:`<strong>${sel}</strong>`,i:`<em>${sel}</em>`,ul:`<ul>\n  <li>${sel}</li>\n  <li>Otro</li>\n</ul>`};
  const ins = map[t]||'';
  const s = ta.selectionStart;
  ta.value = ta.value.substring(0,s)+ins+ta.value.substring(ta.selectionEnd);
  ta.dispatchEvent(new Event('input'));
  ta.focus();
  ta.selectionStart = ta.selectionEnd = s+ins.length;
}

// ════════════════════════════════════════════════════
//  UTILIDADES
// ════════════════════════════════════════════════════
function _hoy() {
  return new Date().toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'});
}

let _toastT;
function rjToast(msg, tipo='ok') {
  const t = document.getElementById('rjToast');
  t.textContent = msg;
  t.className = tipo==='err' ? 'show err' : 'show';
  clearTimeout(_toastT);
  _toastT = setTimeout(()=>t.className='', 3200);
}

// Radio
function toggleRadio() {
  const audio = document.getElementById('miReproductor');
  const icon  = document.getElementById('radioPlayIcon');
  const label = document.getElementById('radioPlayLabel');
  if (audio.paused) { audio.play(); icon.textContent='⏸'; label.textContent='En vivo'; }
  else { audio.pause(); icon.textContent='▶'; label.textContent='Escuchar en vivo'; }
}

// ── Iniciar al cargar ──────────────────────────────
document.addEventListener('DOMContentLoaded', renderHome);
