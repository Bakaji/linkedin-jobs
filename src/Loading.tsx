export default function Loading() {
    return (
        <div className="errorParent">
            <div className="d-flex flex-column align-items-center mb-4">
                <div
                    className="spinner-border text-primary"
                    role="status"
                ></div>
                <h3 className="text-primary mt-5">Loading...</h3>
            </div>
        </div>
    );
}
