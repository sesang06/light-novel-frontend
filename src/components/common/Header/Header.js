import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div>
            <div>
                <Link to="/category">
                    카테고리 추가/제거
                </Link>
            </div>
            <div>
                <Link to="/series">
                    시리즈 편집 이동
                </Link>
            </div>
        </div>
    </header>
)

export default Header;