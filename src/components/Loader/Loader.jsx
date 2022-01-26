
import { css } from '@emotion/react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import './Loader.css'

const Loader = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loaderContainerMobile">
                <PacmanLoader color='#dc3545' css={override} size={60} />
            </div>
            <div className="loaderContainer">
                <PacmanLoader color='#dc3545' css={override} size={150} />
            </div>
        </>
    )
}

export default Loader
