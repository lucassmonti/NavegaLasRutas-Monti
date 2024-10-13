import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAAD8/Pzz8/Pp6ens7Oz39/fv7++qqqr09PSVlZW6urrKysq+vr59fX3IyMidnZ2urq7Y2NgvLy/e3t6KioqEhIRUVFRvb29ZWVlNTU1BQUGjo6PQ0NBra2tISEg6OjooKChiYmIgICBtbW0LCwsVFRUrKys0NDR2dnaQkJAiIiJ/f38REREZGRkM4j/uAAALhElEQVR4nO1d53ryOgwmEGaYIWWUTb+2dN7/5Z0OLMmOQyBRIqfPef8VFyMltrblWs1NNPud1+HcG0nTUQzawcuD94tAmpYCEPWmHqIjTQ43GmvK3hfG0hTxYnP0TLxK08SJ0T7Gn+fdSVPFh76NP8+bSdPFhejeyp/nvUtTxoS7BP48byhNGgv6ifz9kVUaf4HHoPmHJI1vKEBvNanXavW/w+HA4O8l/Pm4of7uCdOXG2tDcjbPn0fqk6pbbe8af9sGDIzUZwNB6hiwpfxNQzIyUZ9uxIjjgMagvuFAvjYTvlsJvBD+HiJ9bKkGZEjjAVWDR3NQDezLp4sNE8JgzAn01cg/CdJ4sCEMxiMVgRpaC5DGgwZh0BJsgi1aXVFKnKW+ZfhRDdZLp4wJxJSxBdNCNbgrnTIm+MigNdI0uzhaBeAaXVjHYTiyDrsP9Cem1nGQpIeSCWMDyBHPt46f1HBVXScUM3Zt1095AM4D3HdvZf8HCCvOyyWMDeMUOQK70KopqwBg4MU6jK/YLobcB1rcDes4+lRVde9hl9mjaChmqqoqwCDz2rbhFgxX1ugGg8xuzeyAwZhTXBVcFqQLfIXdsiljAji+J9voEBmclE0ZF2CR2iK9JHpa2TVaO1yQMyS4+FhZzxccw/vYUAuFTHW9JqLuY4s0JPxVuUwIFqLpNfQog5WVMjWiK/SPQy2HWN0IYq3WVkxo6r6xoPxVO58GOTOyDltGkrvahWzgGkIiralnEKvrE54BntGvSdYKzCqa54rGLQCrMyPfjlF9sPVM2H3iKuHzzMkqHC9j7FXX5UW0LFyRF1hZSw3hX+BvH6Z/331sEvmbVn+B/mCUwN9btXUggVn/9ItlxVUgRWDh77XqGlDD2ODu+e5PiBeCV8resWN9e43++m67208PDw+H59XirrNxpGaoGwXr9+NyOV8ut6+dQWQNhiqjbTWc2F6eH8zm1p06741kdWVrNDvEqPrYrmNcBOPJoB9ag/ndYBHnTOOyI/Yug/gZCcByfVXApb1OqmPXmZRQms3kEvQzPtOkSWuyS5sD0Ss5Ttx9SafpC88X6ApTFmcMszJ57KXTo3C0p1kmbzfy943Skvubw010nWKWWX38mP41G55KMYK6cfc1FVqIqft64T8fp7v7+fx+95kw/q945WG3MNPwCDx2kyTUdDjZNJD+erPfgcOWdKaik4txCTO/C0L/W9PVu340mgwTxP/T71q1v79jJ7K/m3YQXzGFntrzn41fW9ii8FHHqihXkVY7Cy/lJWVzDUxzZ1fcSjX92GRdUO/b1In5fL7wcs2ii4b6l96KMnI6Bn8p/z6whZw0rK5OUzSMB1ZMhkr3gOZXPMf2OEkkfmNxkwPl68+rCOdrRn/g+VrFNEqyO+/sNTUXoEtxfpGqMXiLcRHa/KJeKwMJLe01ci9UmmQwz4CkYWO+x9eswlA7DWZ1RDODqrHj7fT1qRRd3Lw+EVSaP2efJg4qRbOZvzDDLt/qahKLdplrJg30tG5WX7T7YwV85nZlG8SSY6t2pyH5HCIs4DG4GuQtckmbA06ZSw01eQhqIzlMRYxHJgbZECFBLD4xkTKuVEUS1cUQNyeb0JEsik/jVwxVcNiVw5EjEIYHlntdrTmfFgPqpuuZt+gdWjh4bywE5oVvOiuZDFwKtJqdqBkMdfY+8hdRYerWicNyRiaZo0jsoCZLOMVTLnQGWZq7oNhyIV2r9bI58BgfYAG6oCi0PcjUnQde4SPPfLmgVeRwBfef1IQOGDN1ksl54tozUD9hPSBRMkiI5pRXBQLAXnOgupyY/3xiHXb2nm3KzPCLYBBzMA7sQjT/P/lyFnigk23KzCBrlDFjAXJG3l4jxamcOWCwuXNEN5mAmSfO1CGEe+TdQhQzrAegwZ6RVxVYlcLqwcEi5Zw0E9AJ522GqWa1n9ktE1jZwGbLfAM8FfEqbNRavEIdck3ikhSri3nrE9QRF/leRiAQeH3UVjHTZgB2BuNdTZCIFI/jg9ba8s4LcWDx4zoQAGbWy8qvYE0kZwFKUuZnfXBFG0IijbuLoppX/OQx+E3Mh7zB1hXX92CTMgds+wXNezuguxnzvLA2WC3BLFCEMBaW/EAVqn8yz3szYLtwdy9Xq3/PPO/NgHgfdzRM2YLMdsTtgGwTtx+uSgHEbycAgcCdn1UKX/ymF7AeeesQUYKJBxLHBXEIxqB4t5j/OcwK4FC8X0xR+9AdDkGWMpuP7nAI5fnMZ9aAQ3HnCaIpzDYNcCiuLaKiKFHzikfaCgu9qyIMcZsGOHxgnlf5neJ2KYbamD3VXUFr43bAkWpm50J5T/EmjmUD3CdmF1itDfmm0xDUZ47cqpTdB++0WQB1JrweIpiD8h19Ic3Hq7kgHSIeTSSnR1indSf1RGpcWaUpPDhxB5EsU17BrmaVN2pINQ3rglJLQ75ciNxMw5pxV/Wq4kHvGi1g58wTwcFt8RzwF6DT8BPjpKAuXDhwiOfwGU03UBcOCFPyEhkfeFdN6cTN0eQoCd+uOZxn3LPNmAdYqM+XRyzK88wGLE/k24rx5tSiIIXeXBFOEDXiAcVfkM4aTMIPAorcCfSM6HrsLBZVBJEV9Owhz7oCq8aNjag3bmFpbz7gfWAMoJ2iVgylmHAaQT7epqB1GGJIZICp5IRG/IHWqmiZ+zVCibz8gQuA3o0pb2wKjEHeUw75YLQYXOcyU106u4Yw20rm6gkOG9sVffGDWOfF+0nmoC7Ygg6EowhCk8XsfZQxyMVLYm7Ee05mjVFBysAJR58gdtFC1rPB4EE5d2lmfaZzmLWzDPbUckglnuHrjXiyag0oI5c//RRHRHRj5hPsKLYcyNDE0YWkTXYjFZpqOeIH6+BIvGEYz4keSgZgE+WxK8HTdyFFYwAFYR6jK3D4JYKJmq9TxoezLxE9g3zOMBq6TtnfNXo9Q86JoM/QnIUuNvAd8Xb1JWJz8dwVMTCTOyGpGn2F+asLMWXg0hViuAsZatxhJ8pXuQHwDDtHFAl3ogPtlM5AJ5ilauugZnOgkO8XEesrpJUCrkT4MW7K1GgBO225Ef/GR84VJMNm9m5Eh7FlOVvhAuZEXDDAMSrMd6YHd7YD8YxiGmNhPzF5jbECWjhNENITTrrSDXPBvKEVnFf4lAkprWG+EungiLDBNcp92As1hmi/VrS4uU9C0eSk4Jk9cu8Dv7tKanbkzijgDSxFiAN0FMXal6NLUUx3atzkQhY4ufq6mDQD2QQi65T8PnczFwW81kpCnpKO3vvCfgSVooDeJyVRxS0hsk5K75FF7kUr0jbulfEcrSBXA7JUJiYC5Wm5yX2yegruA0gM3zJbLGH0sPjFQ3RSif0I8ExJCVUT5L7w0rxhcoVVGQVaqDLKKmAglSWlpDHJVixHoJIqr5ISC/RO19v87FYUbkaDfhjdkk6hBZdl9W0mWvHat9gc9BYn8jVvuuhc5+HRK17LCy8cb/pVf7J982z4nKV/mb7BMovPVuR3L8f0op7lMm7EPsX6oxdyl1oi2aIXvCV7i43x4RJ7P5heejNENZXdDqhNiUwQ4WaNZBKOifkeesKi9LOe2gVTe5tsHHhXI2H90e0ukBPyL9MYJt04bsXJslQbdLOL9AJqP1Aap5oJl3ijeiLe1oau04ryhZodtU46kf86YbPV8jedhWfHcjgORqPRIFi/m3dtfuPYAeURjbXHV6xHeAk2Ou2YjzdGSie0qpHpYjgbmtfNS+ZlxxYi43g1uTtjs0r/rifdNa6fSt/7JePsGnkrXR4R2Q0yhUVKbUMrac8CHDjscUGvn65wIMN98vc979GJGvpoaaduemUMYJC8Hd2o/fhCFD+K5C1uePqhfa3eu1D5oVAPtgck7fAyuDHdXw9MzfN0hWtVNrrhIOh0gkGYzROv+8Hdv/230/Kxep/wsPcfXNl4iNtz2w8AAAAASUVORK5CYII=" 
                        alt="logoapple" 
                        className="navbar-logo"
                    />
                    iStore - Reseller Oficial
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#iphone">iPhone</Nav.Link>
                        <Nav.Link href="#macs">Macs</Nav.Link>
                        <Nav.Link href="#watch">Watch</Nav.Link>
                        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                        <Nav.Link href="#apple-tv">Apple TV</Nav.Link>
                        <Nav.Link href="#homepod">HomePod</Nav.Link>
                    </Nav>
                    <div className="cart-widget">
                    <CartWidget />
                    <div className="cart-count">3</div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
