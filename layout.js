window.onload = () => {
    const templateHeader = `  
      <div class="fondo-oscuro">
        <div class="titulo">
          <img class="img" src="../public/images/logo8time.png" alt="">
          <h3 class="title">8 TIEMPOS - ESTUDIO DE DANZA</h3>
        </div>
        <nav class="navegacion">
          <li><a href="./index.html">Inicio</a></li>
          <li><a href="./galeria.html">Galeria</a></li>
          <li><a href="./nosotros.html">Historia</a></li>
          <li><a href="./login.html">Login</a></li>
        </nav>`;
    document.querySelector('header').innerHTML = templateHeader;

    const templateFooter = ` 
    <section>
      <div class="instagram">
        <h2>INSTAGRAM</h2>
        <a href="https://www.instagram.com/8tiempos.danza?igsh=ZXNucXVtcHZteDQz" target="_blank"> <img class="insta"
            src="../public/images/insta.png" alt="instagram" width="20px">
        </a>
      </div>
      <div>
        <h2>WHATSAPP</h2>
        <a href="https://wa.me/5491166670812" target="_blank"><img class="WhatsApp" src="../public/images/whatsapp.png"
            width="20px">
        </a>
      </div>
      <div>
        <h2>HORARIOS</h2>
        <h3> Martes y Jueves</h3>
        <h2> 15:00 a 16:30 hs</h2>
      </div>
    </section>
    <p class="parrafo1" style="color:#5e5e55">Copyright © 8 Tiempos - Estudio de Danza 2025</p>`;
    document.querySelector('footer').innerHTML = templateFooter;
};
