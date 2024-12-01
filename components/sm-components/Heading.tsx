const Heading = ({ firstPhrase, secondePhrase }: {
    firstPhrase: string;
    secondePhrase: string;
}) => {
    return (
        <h1 className="heading">
            {firstPhrase} {' '}
            <span className="text-purple">{secondePhrase}</span>
        </h1>
    )
}

export default Heading