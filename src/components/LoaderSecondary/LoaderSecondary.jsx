
import { css } from '@emotion/react'
import MoonLoader from 'react-spinners/MoonLoader'
import './LoaderSecondary.css'

const LoaderSecondary = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loaderSecondaryContainerMobile">
                <MoonLoader color='#dc3545' css={override} size={150} />
            </div>
            <div className="loaderSecondaryContainer">
                <MoonLoader color='#dc3545' css={override} size={150} />
            </div>
        </>
    )
}

export default LoaderSecondary
