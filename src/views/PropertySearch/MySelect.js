import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
// const customStyles = {
//     option: (provided, state) => ({
//         ...provided,
//         borderBottom: '1px dotted pink',
//         color: state.isSelected ? 'red' : 'blue',
//         padding: 20,
//     }),
//     control: () => ({
//         // none of react-select's styles are passed to <Control />
//         width: 200,
//     }),
//     singleValue: (provided, state) => {
//         const opacity = state.isDisabled ? 0.5 : 1;
//         const transition = 'opacity 300ms';

//         return { ...provided, opacity, transition };
//     }
// }

const MySelect = props => {
    if (props.allowSelectAll) {
        return (
            <ReactSelect
                {...props}
                // styles={customStyles}
                placeholder={props.placeholder}
                options={[props.allOption, ...props.options]}
                onChange={selected => {
                    if (
                        selected !== null &&
                        selected.length > 0 &&
                        selected[selected.length - 1].value == props.allOption.value
                    ) {
                        return props.onChange(props.options);
                    }
                    return props.onChange(selected);
                }}
            />
        );
    }

    return <ReactSelect {...props} />;
};

MySelect.propTypes = {
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    allowSelectAll: PropTypes.bool,
    allOption: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })
};

MySelect.defaultProps = {
    allOption: {
        label: "Select all",
        value: "*"
    }
};

export default MySelect;
