import { ReactElement, useContext } from "react";
import { ThemeContext } from "../../App";
import { JSX } from "react/jsx-runtime";
import { WithThemeProp } from "../../types/customTypes";

const withTheme = (Component: ({ theme }: WithThemeProp) => ReactElement) => {
    return (props: JSX.IntrinsicAttributes) => {
        const theme = useContext(ThemeContext);
        return <Component {...props} theme={theme} />;
    };
};

export default withTheme;
