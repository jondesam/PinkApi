import React from 'react';
import { Container, Header, Table, Segment, Button } from 'semantic-ui-react';

export const BreweryDetail = ({ match }) => {
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key));
    };

    const beerList = localStorage.getObj('BeerList');

    const matchedBeer = beerList.find((beer) => beer.id.toString() === match.params.id);

    return (
        <Container
            style={{
                paddingTop: '20px',
                paddingBottom: '40px',
            }}
        >
            <Button
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
                className="ui button"
                href={`/`}
            >
                Back to the list
            </Button>

            {matchedBeer ? (
                <div>
                    <Header as="h1">
                        {matchedBeer.name}
                        <Header.Subheader>{matchedBeer.name}</Header.Subheader>
                    </Header>
                    <Segment size="large" vertical>
                        {matchedBeer.description}
                    </Segment>

                    <Table definition>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell width={2}>ABV</Table.Cell>
                                <Table.Cell>{matchedBeer.abv}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>IBU</Table.Cell>
                                <Table.Cell>{matchedBeer.ibu}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>SRM</Table.Cell>
                                <Table.Cell>{matchedBeer.srm}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>PH</Table.Cell>
                                <Table.Cell>{matchedBeer.ph}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Volume</Table.Cell>
                                <Table.Cell>
                                    {matchedBeer.volume.value} {matchedBeer.volume.unit}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Best Matches</Table.Cell>
                                <Table.Cell>
                                    {matchedBeer.food_pairing.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Brewers Tips</Table.Cell>
                                <Table.Cell>{matchedBeer.brewers_tips}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Released date</Table.Cell>
                                <Table.Cell>{matchedBeer.first_brewed}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Header as="h3" content="Ingredients" />

                    <Table definition>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell width={2}>Malts</Table.Cell>

                                <Table.Cell className="inline">
                                    {matchedBeer.ingredients.malt.map((item, index) => (
                                        <div key={index}>{item.name}</div>
                                    ))}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell width={2}>Hops</Table.Cell>

                                <Table.Cell>
                                    {matchedBeer.ingredients.hops.map((item, index) => (
                                        <div key={index}>{item.name}</div>
                                    ))}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell width={2}>Yeast</Table.Cell>

                                <Table.Cell>{matchedBeer.ingredients.yeast}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            ) : null}

            <></>
        </Container>
    );
};
