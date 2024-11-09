function MainLayout({children}) {
    return (
        <div>
            <div className="flex-col">
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
        </div>
    );
}

export default MainLayout;