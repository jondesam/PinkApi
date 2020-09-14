import React, { useContext, useState } from 'react';

import { Card, Button, Table, Form, Radio } from 'semantic-ui-react';
import { BeersContext } from '../../BeersContext';

export const HomePage = () => {
    const [state, setState] = useContext(BeersContext);

    const onChangeRadio = (e, { value }) => SetSelector({ value });
    const onChangeUserInput = (e) =>
        setFormUserInput({ ...formUserInput, [e.target.name]: e.target.value });

    const [selector, SetSelector] = useState({ value: 'ABV' });
    const [formUserInput, setFormUserInput] = useState({
        min: '',
        max: '',
        searchString: '',
    });

    const { min, max, searchString } = formUserInput;

    const onSubmit = (e) => {
        e.preventDefault();

        let newUrl = '';

        if (searchString) {
            newUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchString}`;
        }

        if (min || max) {
            switch (selector.value) {
                case 'ABV':
                    newUrl = `https://api.punkapi.com/v2/beers?abv_gt=${min}&abv_lt=${max}`;
                    break;
                case 'IBU':
                    newUrl = `https://api.punkapi.com/v2/beers?ibu_gt=${min}&ibu_lt=${max}`;
                    break;
                case 'EBC':
                    newUrl = `https://api.punkapi.com/v2/beers?ebc_gt=${min}&ebc_lt=${max}`;
                    break;

                default:
                    console.log("It's an Exception!");
                    break;
            }
        }
        // console.log(state);
        state.setNewUrl(newUrl);
    };

    return (
        <div
            style={{
                marginTop: '-80px',
                paddingBottom: '50px',
            }}
        >
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder="Search beer ..."
                        name="searchString"
                        value={searchString}
                        onChange={onChangeUserInput}
                        required
                    />
                    <Form.Button value="reset" content="Search" />
                </Form.Group>
            </Form>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Field>
                        <Radio
                            label="ABV"
                            name="radioGroup"
                            value="ABV"
                            checked={selector.value === 'ABV'}
                            onChange={onChangeRadio}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label="IBU"
                            name="radioGroup"
                            value="IBU"
                            checked={selector.value === 'IBU'}
                            onChange={onChangeRadio}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label="EBC"
                            name="radioGroup"
                            value="EBC"
                            checked={selector.value === 'EBC'}
                            onChange={onChangeRadio}
                        />
                    </Form.Field>
                    <Form.Input
                        placeholder="from"
                        name="min"
                        value={min}
                        onChange={onChangeUserInput}
                        required
                    />
                    <Form.Input
                        placeholder="to"
                        name="max"
                        value={max}
                        onChange={onChangeUserInput}
                        required
                    />
                    <Form.Button value="reset" content="Search" />
                </Form.Group>
            </Form>

            <Form />
            <Card.Group itemsPerRow={2} stackable={true} doubling={true}>
                {state
                    ? state.beers.map((brewery) => (
                          <Card key={brewery.id} brewery={brewery}>
                              <Card.Content>
                                  <Card.Header href={`/beers/${brewery.id}`}>
                                      {brewery.name}
                                  </Card.Header>
                                  <Card.Meta>{brewery.tagline}</Card.Meta>
                                  <Card.Description>{brewery.description}</Card.Description>
                              </Card.Content>
                              <Table
                                  definition
                                  style={{
                                      marginBottom: '0px',
                                  }}
                              >
                                  <Table.Body>
                                      <Table.Row>
                                          <Table.Cell width={4}>ABV</Table.Cell>
                                          <Table.Cell>{brewery.abv}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                          <Table.Cell width={4}>IBU</Table.Cell>
                                          <Table.Cell>{brewery.ibu}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                          <Table.Cell width={4}>EBC</Table.Cell>
                                          <Table.Cell>{brewery.ebc}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                          <Table.Cell width={4}>PH</Table.Cell>
                                          <Table.Cell>{brewery.ph}</Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                          <Table.Cell width={4}>Released date</Table.Cell>
                                          <Table.Cell>{brewery.first_brewed}</Table.Cell>
                                      </Table.Row>
                                  </Table.Body>
                              </Table>
                              <Button className="ui bottom " href={`/beers/${brewery.id}`}>
                                  More details
                              </Button>
                          </Card>
                      ))
                    : null}
            </Card.Group>
        </div>
    );
};
