import React from 'react';
import '../css/footer.css';
import facebookLogo from "../img/ic-facebook@1x.png"
import instagramLogo from '../img/ic-instagram@1x.png'
import twitterLogo from '../img/ic-twitter@1x.png'
import youtubeLogo from '../img/ic-youtube@1x.png'

const footerLinks = [
    {
        name: 'Audio y subtitulos',
        path: '',
    },
    {
        name: 'Audio descriptivo',
        path: '',
    },
    {
        name: 'Centro de ayuda',
        path: '',
    },
    {
        name: 'Tarjeta de regalo',
        path: '',
    },
    {
        name: 'Prensa',
        path: '',
    },
    {
        name: 'Relaciones con inversionistas',
        path: '',
    },
    {
        name: 'Empleo',
        path: '',
    },
    {
        name: 'Terminos de uso',
        path: '',
    },
    {
        name: 'Privacidad',
        path: '',
    },
    {
        name: 'Aviso legales',
        path: '',
    },
    {
        name: 'Preferencias de cookies',
        path: '',
    },
    {
        name: 'Informacion corporativa',
        path: '',
    },
    {
        name: 'Contactanos',
        path: '',
    },
];

const Footer = () => (
    <div className="footer_container">
        <div className="footer_inside_container">
            <table className="footerSocialMedia">
                <tbody>
                    <tr>
                        <td><img src={facebookLogo} alt="Facebook" /></td>
                        <td><img src={instagramLogo} alt="Instagram" /></td>
                        <td><img src={twitterLogo} alt="Twitter" /></td>
                        <td><img src={youtubeLogo} alt="Youtube" /></td>
                    </tr>
                </tbody>
            </table>
            <div className="footer_links">
                {footerLinks.map((link) => <div key={link.name}><p>{link.name}</p></div>)}
            </div>
            <div className="footer_language_selector">
                <select>
                    <option>
                        Codigo de servicio
          </option>
                    <option>
                        485-393
          </option>
                </select>
            </div>
            <span> © 1997-2021 Liteflix, Inc.</span>
        </div>
    </div>
);

export default Footer;