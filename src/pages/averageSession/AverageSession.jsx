const AverageSessions = ({ data }) => {
    return (
        <div>
            <h2>Average Sessions</h2>
            {data ? (
                <p>
                    Durée moyenne des sessions: {data.averageSessions}
                    minutes
                </p>
            ) : (
                <p>...</p>
            )}
        </div>
    );
};

export default AverageSessions;
