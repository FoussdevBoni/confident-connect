import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeTab = (props) => (
    <Svg
        width={26}
        height={26}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2.782 13.426c.11.11.257.173.415.176l-.415-.176Zm0 0a.604.604 0 0 1 0-.853l9.79-9.79m-9.79 10.643 9.79-10.643m0 0A.597.597 0 0 1 13 2.606c.161 0 .312.063.426.177l9.788 9.787.005.005a.605.605 0 0 1-.429 1.029M12.573 2.783l10.216 10.82m0 0h-1.065a.903.903 0 0 0-.903.904v7.907c0 .54-.44.98-.98.98h-2.927m5.875-9.79-5.875 9.79m0 0v-4.745a2.789 2.789 0 0 0-2.786-2.787H11.87a2.79 2.79 0 0 0-2.786 2.786v4.746H6.156c-.54 0-.98-.44-.98-.98v-7.907a.903.903 0 0 0-.903-.903h-1.04a.754.754 0 0 0-.036-.002l13.718 9.792ZM3.18 15.41h.19v7.004A2.789 2.789 0 0 0 6.156 25.2h3.83a.903.903 0 0 0 .903-.903v-5.649c0-.54.44-.98.98-.98h2.26c.54 0 .98.44.98.98v5.649c0 .498.403.903.902.903h3.83a2.789 2.789 0 0 0 2.787-2.786V15.41h.161c.643 0 1.25-.251 1.704-.706.939-.94.94-2.467.002-3.406l-.002-.002-.142.141.142-.141-9.79-9.79A2.395 2.395 0 0 0 12.999.8c-.643 0-1.249.25-1.704.706L1.51 11.29a2.412 2.412 0 0 0-.006 3.413 2.396 2.396 0 0 0 1.676.706Z"
            fill="#374f71"
            stroke="#374f71"
            strokeWidth={0.4}
        />
    </Svg>
);

export default HomeTab;
