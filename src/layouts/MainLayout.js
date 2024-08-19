function MainLayout({children}) {
    return (
        <div className="flex-col">
            <div>
                {children[0]}
            </div>
            <div className="flex">
                <div className="grow-0">
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