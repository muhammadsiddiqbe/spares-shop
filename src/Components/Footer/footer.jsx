import { Fragment } from "react"
import './footer.css'

function Footer() {
  
  return(
    <Fragment>
      <footer className='site-footer'>
        <div className="container">
          <div className="footer-wrapper">
          <div>
            <h3>Подпишитесь на нашу рассылку и узнавайте об акция быстрее</h3>
            <input type="email"/>
            <p>Интернет-магазин автозапчастей</p>
          </div>

          <div>
            <h3>Информация</h3>
            <ul className='list-style-none'>
              <li>О компании</li>
              <li>Контакты</li> 
              <li>Реквизиты</li>
              <li>Магазины</li>
            </ul>
          </div>

          <div>
            <h3>Сервисный центр</h3>
            <ul>
              <li>Доставка и самовывоз</li>
              <li>Оплата</li>
              <li>Возврjат-обмен</li>
              <li>Новости</li>
            </ul>
          </div>     

          <div>
            <h3>Интернет-магазин</h3>  
            <ul>
              
              <li>Доставка и самовывоз</li>
              <li>Оплата</li>
              <li>Возврат-обмен</li>
              <li>Новости</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Акции</li>
              <li>Договор оферты</li>
              <li>Политика обработки </li>
              <li>персональных данных</li>
            </ul>
          </div>
          </div>

        </div>
      </footer>
    </Fragment>
  )
}

export default Footer