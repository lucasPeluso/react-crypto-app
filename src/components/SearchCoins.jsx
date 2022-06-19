
const SearchCoins = ({ setSearch }) => {

    return (
        <div>
            <h1 className="text-white text-center mt-4">Cryptocurrency Prices by Market Cap</h1>
            <input 
                type="text" 
                placeholder='Search Coin' 
                className='
                        form-control 
                        bg-dark 
                        text-light 
                        text-center
                        border-0
                        mt-4
                        w-50
                        m-auto'
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchCoins