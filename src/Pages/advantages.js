import db from '../firebase.config';
import React, {useEffect, useState} from "react";
// import {Container, Tab, Row, Col} from 'react-bootstrap'; 
import './adv.css';




import '../App.css';

function Advantages() {
    const [title, setAnswers] = useState()
    const [full_text, setQuestions] = useState([])

    const fetchFaqs = () => {
        db.collection("team-collection")
            .doc('yura')
            .get()
            .then(doc => {
                setAnswers(doc.data().title)
                setQuestions(doc.data().full_text)
            });
    }

    useEffect(() => {
        fetchFaqs()
    }, [])

    const faqStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <div>
            <h3>Advantages</h3>

            <div style={faqStyle}>

                  <ul>
                      
                  </ul> 

                  <ul>
                    <li class="tit">
                      {title && title.map(item => (
                          <li key={item}>{item}</li>
                      ))}
                    </li>
                    <li class="ful">
                    {full_text && full_text.map(item => (
                          <li key={item}>{item}</li>
                      ))}
                    </li>
                  </ul>

                  <ul>
                  </ul>

            </div>

        </div>
    );
}

export default Advantages;


// export default class Advantages extends Component{
//     render(){
//         // return (
//         //     <Container>
//         //         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//         //             <Row> 
//         //             <Col>
//         //                      <Tab.Content>
//         //                      <h1 className="top_content">
//         //                         Преимущества сайта
//         //                     </h1>
//         //                          <Tab.Pane eventKey="first" className="p_content">
//         //                              <h2>
//         //                                 Привлечение многомиллионной аудитории.
//         //                              </h2>
//         //                              <img className="img_content" src="https://3dnews.ru/assets/external/illustrations/2015/01/27/908662/runet3.jpg" />
//         //                              <p>
//         //                              Наличие интернет ресурса дает возможность развивать бизнес за пределами своего географического положения и получить новых клиентов не только в своем регионе, а если вы того захотите то и за ее пределами. Интернет имеет глобальный охват, чем может воспользоваться ваша организация без дополнительных затрат. Вам не придется тратить большие деньги на рекламу своего бизнеса на новых рынках, один сайт может это делать в большинстве стран мира
//         //                              </p>
//         //                          </Tab.Pane>
//         //                          <Tab.Pane eventKey="second" className="p_content">
//         //                             <h2>
//         //                             Ваши клиенты могут легко с вами связаться.
//         //                              </h2>
//         //                              <img className="img_content" src="https://altai-republic.ru/upload/iblock/242/%D0%BC%D0%BE%D0%B1.jpg" />
//         //                              <p>
//         //                              Через ваш сайт ваши клиенты могут связаться с вами по электронной почте 24 часа в сутки, ваш сайт может привлекать новых клиентов или производить продажу вашей продукции, в то время когда вы спите. Представьте себе, просыпаетесь каждое утро, а ваш почтовый ящик полон запросов клиентов или заказов. Так же наличие интернет ресурса дает возможность оперативней и экономически эффективнее реагировать на запросы клиентов, чем телефонная связь или обычная почта.
//         //                              </p>
//         //                          </Tab.Pane>
//         //                          <Tab.Pane eventKey="third" className="p_content">
//         //                             <h2>
//         //                             Мгновенное обновление информации о компании.
//         //                              </h2>
//         //                              <img className="img_content" src="https://memepedia.ru/wp-content/uploads/2019/12/kot-gruzitsja-9.jpg" />
//         //                              <p>
//         //                              При помощи системы управления контентом, которая интегрирована в ваш сайт, вы сможете обновлять информацию на нем 24 часа в сутки, 7 дней в неделю без того, чтобы тратить время и деньги на обновление рекламной брошюры. Вы можете мгновенно изменять цены, актуализировать контактные данные или даже полностью менять содержание вашего сайта в любое время.
//         //                              </p>
//         //                          </Tab.Pane>
//         //                          <Tab.Pane eventKey="fourth" className="p_content">
//         //                             <h2>
//         //                             Мгновенная доступность каталога товаров
//         //                              </h2>
//         //                              <img className="img_content" src="https://eservice.hettich.com/uploads/tx_templavoila/Hettich-Interzum-eService-Onlinekatalog_800-600-01_34.jpg" />
//         //                              <p>
//         //                              Электронный каталог ваших товаров и услуг в каждом доме, доступен 24 часа в сутки, 7 дней в неделю, 365 дней в году. Ваши товары выставляются круглосуточно и по всему миру. Заинтересуйте клиента или покупателя независимо от времени суток. Покупателю больше не придется ждать, пока магазин или офис откроется или в его городе будет проходить выставка ваших товаров или услуг.
//         //                              </p>
//         //                          </Tab.Pane>
//         //                      </Tab.Content>
//         //                  </Col>
//         //             </Row>
//         //         </Tab.Container>
//         //     </Container>
//         // )
//     }
// }