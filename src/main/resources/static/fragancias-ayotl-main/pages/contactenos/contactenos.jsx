
return async ({ }) => {

  return (
    <>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-lg border-0">
              <div class="card-body p-4">
                <h2 class="card-title text-center mb-4">Contáctanos</h2>
                <form id="contactForm" onsubmit="return validateForm();">
                  <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name" placeholder="Escribe tu nombre" required />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Teléfono</label>
                    <input type="tel" class="form-control" id="phone" placeholder="1234567890" required />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí"
                      required></textarea>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                  </div>
                </form>
                <div id="statusMessage" class="mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}