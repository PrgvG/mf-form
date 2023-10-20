import ReactDOM from 'react-dom';
import App from './src/App';

let memRootElement = null;

export const render = (elem, config) => {
    try {
        memRootElement = elem;

        ReactDOM.render(<App config={config} />, elem);
    } catch (error) {
        console.error('Error on draw widget', error);
    }
};

export const clear = () => {
    ReactDOM.render([], memRootElement);
};
