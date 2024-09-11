import { useEffect, useState } from "react"

import "@/styles/auth.scss"
export default function AuthPage () {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

   useEffect(() => {
    const handleInputFocus = (event) => {
      event.target.classList.add('active')
    }

    const handleInputBlur = (event) => {
      const input = event.target
      if (input.value === '') {
        input.classList.remove('active')
      }
    }

    const handleToggle = (e) => {
      e.preventDefault()
      const main = document.querySelector('main')
      main.classList.toggle('sign-up-mode')
    }

    const moveSlider = function () {
      const index = this.dataset.value

      const currentImage = document.querySelector(`.img-${index}`)
      const images = document.querySelectorAll('.image')
      images.forEach((img) => img.classList.remove('show'))
      currentImage.classList.add('show')

      const textSlider = document.querySelector('.text-group')
      textSlider.style.transform = `translateY(${-1 * (index - 1) * 2.2}rem)`

      const bullets = document.querySelectorAll('.bullets span')
      bullets.forEach((bull) => bull.classList.remove('active'))
      this.classList.add('active')
    }

    const inputs = document.querySelectorAll('.input-field')
    inputs.forEach((inp) => {
      inp.addEventListener('focus', handleInputFocus)
      inp.addEventListener('blur', handleInputBlur)
    })

    const toggle_btn = document.querySelectorAll('.toggleLink')
    toggle_btn.forEach((btn) => {
      btn.addEventListener('click', handleToggle)
    })

    const bullets = document.querySelectorAll('.bullets span')
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', moveSlider)
    })

    return () => {
      // Clean up event listeners when component unmounts
      inputs.forEach((inp) => {
        inp.removeEventListener('focus', handleInputFocus)
        inp.removeEventListener('blur', handleInputBlur)
      })

      toggle_btn.forEach((btn) => {
        btn.removeEventListener('click', handleToggle)
      })

      bullets.forEach((bullet) => {
        bullet.removeEventListener('click', moveSlider)
      })
    }
  }, [])

  return (
    <div className="auth text-sm">
      <main className="bg-zinc-200">
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form action="index.html" autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src="/img/logo.png" alt="easyclass" />
                  <h4>IManager</h4>
                </div>

                <div className="heading">
                  <h2 className="text-2xl">Gerez votre inventaire plus facilement, connectez-vous </h2>
                  <h6>Pas encore de compte?</h6>
                  <a href="" className="toggleLink ml-2">S'inscrire</a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      name="email"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label>Nom d'utilisateur</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div>

                  <input type="submit" value="Se connecter" className="sign-btn" />

                  <p className="text">
                    <a href="#">Mot de passe oublié?</a>
                  </p>
                </div>
              </form>

              <form action="index.html" autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src="/img/logo.png" alt="easyclass" />
                  <h4>IManager</h4>
                </div>

                <div className="heading">
                  <h2 className="text-2xl">Créez un compte rapidement</h2>
                  <h6>Vous avez déjà un compte?</h6>
                  <a href="" className="toggleLink ml-2 mt-3">Se connecter</a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label>Nom d'utilisateur</label>
                  </div>
                  

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div>

                  <input type="submit" value="S'inscrire" className="sign-btn" />

                  <p className="text">
                      En m'inscrivant, j'accepte les Conditions d'utilisation et Politiques de confidentialité
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel bg-zinc-50">
              <div className="images-wrapper">
                <img src="/img/box.gif" className="image img-1 show" alt="" />
              </div>

              <div className="text-slider">

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}