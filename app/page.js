export default function LoginPage() {
  return (
    <>
      <main className='flex flex-col h-screen w-screen items-center justify-center bg-carro-background bg-cover'>
        <div className='mx-auto flex w-full max-w-sm flex-col gap-6'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-semibold text-white'>ARCHIP</h1>
            <p className='text-sm text-gray-50'>Entre para acessar sua conta</p>
          </div>
          <div className='form-group'>
            <div className='form-field'>
              <label className='form-label text-gray-50 font-semibold'>
                Endereço de email
              </label>

              <input
                placeholder='Escreva aqui'
                type='email'
                className='input max-w-full'
              />
              <label className='form-label'>
                <span className='form-label-alt'>Digite um email valido.</span>
              </label>
            </div>
            <div className='form-field'>
              <label className='form-label text-gray-50 font-semibold'>
                Senha
              </label>
              <div className='form-control'>
                <input
                  placeholder='Escreva aqui'
                  type='password'
                  className='input max-w-full'
                />
              </div>
            </div>
            <div className='form-field'>
              <div className='form-control justify-between'>
                <div className='flex gap-2'>
                  <input type='checkbox' className='checkbox' />
                  <a href='#'>Lembre de mim</a>
                </div>
                <label className='form-label'>
                  <a className='link link-underline-hover link-primary text-sm'>
                    Esqueceu sua senha?
                  </a>
                </label>
              </div>
            </div>
            <div className='form-field pt-5'>
              <div className='form-control justify-between'>
                <button
                  type='button'
                  className='btn bg-white text-zinc-900 w-full'
                >
                  Log in
                </button>
              </div>
            </div>

            <div className='form-field'>
              <div className='form-control justify-center'>
                <a className='link link-underline-hover link-primary text-sm'>
                  Não tem uma conta? Registre-se.
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
