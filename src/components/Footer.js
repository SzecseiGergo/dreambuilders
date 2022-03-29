import React from 'react';

export default function Footer() {
    return (
        <div className='row p-3 bg-dark footer'>
            <div className='col-12 col-sm-3'>
                <h5 className='text-success'>Ügyfélszolgálati idő</h5>
                <ul>
                    <li> Hétfő - Péntek:<p>8:00 - 17:00</p></li>
                    <li> Szombat - Vasárnap:<p>9:00 - 12:00</p></li>
                </ul>

            </div>
            <div className='col-12 col-sm-3'>
                <h5 className='text-success'>Elérhetőség</h5>
                <ul>
                    <li> Ügyvezető:<p>valaki teszt</p></li>
                    <li>
                        <i className="bi bi-telephone-fill text-success fs-8 pe-3 align-self-center" ></i>
                        06703409658
                    </li>
                    <li>
                        <i className="bi bi-at text-success fs-4 pe-2 align-self-center" ></i>
                        teszt@teszt.hu
                    </li>
                </ul>

            </div>
            <div className='col-12 col-sm-6'>
                <h5 className='text-success'>Cégadatok</h5>
                <div className='row'>

                    <div className='col-12 col-sm-6'>
                        <ul>
                            <li> adószám: <p>231413242</p></li>
                            <li> cégjegyzékszám:<p>1234343353412</p></li>

                        </ul>
                    </div>
                    <div className='col-12 col-sm-6 address'>
                        <ul>
                            <i class="bi bi-bag-heart-fill fs-1"></i>
                            <li> <p>Delikátesz-üzletház 2015 Kft.</p></li>
                            <li> <p> 2151 Fót, Németh Kálmán u. 14/c </p></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}
