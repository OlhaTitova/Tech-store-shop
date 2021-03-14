import styled from 'styled-components'
import { forTablet, forDesktop } from '../../../styles/mediaBreakPoints';

const StyledOrderSuccess = styled.div`
    padding: 50px 30px 100px;

    h2 {
        font-size: 16px;
        padding-bottom: 20px;
        font-weight: 600;
    }
    p {
        font-size: 14px;
        padding: 10px 0;
    }
    span {
        font-weight: 600;
        padding-left: 10px;
    }

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
    @media(min-width: ${forDesktop.minWidth}px){
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 18px;
        }
    }
`
export default StyledOrderSuccess