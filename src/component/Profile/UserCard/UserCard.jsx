import React from 'react';
import style from './UserCard.module.css';

function UserCard() {
    return(
        <div className={`${style.userInfo} default-card`}>
            <div className={style.userInfo__status}>
                <h1 className={style.userInfo__name}>
                    Arnold Schwarzenegger
                </h1>
                <p className={style.userInfo__twit}>
                    set a status message
                </p>
                <span className={style.userInfo__online}>
                        online
                    </span>
            </div>
            <div className={style.userDescr}>
                <h3 className={style.userDescrTitle}>
                    About me
                </h3>
                <div className={style.userDescrText}>
                    Современные технологии достигли такого уровня, что выбранный нами инновационный путь требует определения и уточнения переосмысления внешнеэкономических политик. Как уже неоднократно упомянуто, непосредственные участники технического прогресса заблокированы в рамках своих собственных рациональных ограничений.
                </div>
            </div>
        </div>
    )
}

export default UserCard;