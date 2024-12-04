const AverageSessions = ({ data }) => {
    return (
        <div>
            <h2>Average Sessions</h2>
            {/* Logique d'affichage des données des sessions */}
            {data ? (
                <p>
                    Durée moyenne des sessions: {data.averageSessionLength}
                    minutes
                </p>
            ) : (
                <p>...</p>
            )}
        </div>
    );
};

export default AverageSessions;
