

const Divider = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='divider w-30 divider-primary'></div>
            <div className='w-3 h-3 bg-primary rotate-45'></div>
            <div className='divider w-3 divider-primary'></div>
            <div className='w-3 h-3 bg-primary rotate-45'></div>
            <div className='divider w-30 divider-primary'></div>
        </div>
    );
};

export default Divider;