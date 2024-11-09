function MainLayout({children}) {
    return (
        <div className="grid grid-cols-1">
            <div>
                {children[0]}
            </div>
            <div className="flex">
                <div>
                    {children[1]}
                </div>
                <div className="">
                    {children[2]}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;

