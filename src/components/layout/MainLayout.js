import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { PATH_NAME } from "../../routes/pathName";
import EventBus from "../../helpers/EventBus";
import AuthService from "../../services/tokenServices";
import Logo from '../../assets/svg/logo.svg';
import IconMenu from '../../assets/svg/icon_menu.svg';
import IconClose from '../../assets/svg/icon_close.svg';
import IconInfo from '../../assets/svg/icon_info.svg';
import IconMemo from '../../assets/svg/icon_memo.svg';
import IconChallenge from '../../assets/svg/icon_challenge.svg';

const MainLayout = (props) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.removeUser();
    setCurrentUser(undefined);
  };

  const handleActionMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const gotoPage = (path) => {
    navigate(path);
  };

  return (
    <div className="col-12">
      <div className="header-container">
        <div className="row col-10 offset-1">
          <div className='col-md-3 col-lg-3 col-sm-3 col-xs-3 header-brand'>
            <a href={`${PATH_NAME.ROOT}`}><img src={Logo} alt="Logo" /></a>
          </div>
          {currentUser && (
            <div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 header-menu">
              <div className="col-md-3 col-lg-2 col-sm-3 col-xs-3 menu-item" onClick={() => gotoPage(PATH_NAME.MY_RECORD)}>
                <img src={IconMemo} alt="icon memo" />
                <span>自分の記録</span>
              </div>
              <div className="col-md-3 col-lg-2 col-sm-3 col-xs-3 menu-item">
                <img src={IconChallenge} alt="icon challenge" />
                <span>チャレンジ</span>
              </div>
              <div className="col-md-3 col-lg-2 col-sm-3 col-xs-3 menu-item">
                <img src={IconInfo} alt="icon info" />
                <span>お知らせ</span>
              </div>
              <div className="col-md-1 col-lg-1 col-sm-1 col-xs-1 menu-item">
                <div>
                  <img src={isOpenMenu ?IconClose : IconMenu} alt="icon menu"  onClick={handleActionMenu}/>
                  {isOpenMenu && (
                    <div className="left-menu-list">
                      <div className="left-menu-item">
                        <a href={`${PATH_NAME.MY_RECORD}`}>自分の記録</a>
                      </div>
                      <div className="left-menu-item">
                        <a href="/">体重グラフ</a>
                      </div>
                      <div className="left-menu-item">
                        <a href="/">目標</a>
                      </div>
                      <div className="left-menu-item">
                        <a href="/">選択中のコース</a>
                      </div>
                      <div className="left-menu-item">
                        <a href={`${PATH_NAME.COLUMN_PAGE}`}>コラム一覧</a>
                      </div>
                      <div className="left-menu-item">
                        <a href="/">設定</a>
                      </div>
                      <div className="left-menu-item" onClick={logOut}>
                        <a href="/">ログアウト</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {!currentUser && (
            <div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 header-menu">
              <button type="submit" className="btn btn-primary btn-block login-button" onClick={() => gotoPage(PATH_NAME.SIGNIN)}>
                <span>ログイン</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="col-12">
        {props.children}
      </div>
      {currentUser && (
        <div className="footer-container">
          <span>会員登録</span>
          <span>運営会社</span>
          <span>利用規約</span>
          <span>個人情報の取扱について</span>
          <span>特定商取引法に基づく表記</span>
          <span>お問い合わせ</span>
        </div>
      )}
    </div>
  );
}

export default MainLayout;
