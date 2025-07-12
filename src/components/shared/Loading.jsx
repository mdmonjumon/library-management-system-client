
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div>
            <FadeLoader
                height={20}
                radius={5}
                width={8}
            />
        </div>
    );
};

export default Loading;