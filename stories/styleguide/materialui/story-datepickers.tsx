import * as React from 'react';
import { Typography } from '@material-ui/core';
import KeyPicker from '../../../src/materialui/datepicker';
import { TableSmallTextDisabled } from '../../../src/materialui/typography';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function DatePickerStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Date Picker
            </Typography>

            <KeyPicker 
                dateFormat="DD MMM YYYY"
                inputProps={{ placeholder: '19 Dec 2018 11:23 AM' }}
                closeOnSelect={true}
            />

            <br/><br/>
            <TableSmallTextDisabled>
                Etiam sit amet ipsum at metus porttitor cursus id tincidunt arcu. Mauris nec eros vel turpis commodo ultricies. Nam sed convallis massa. Cras dolor libero, laoreet et nibh quis, sagittis maximus augue. Morbi mollis tellus justo, sit amet pellentesque nisi porttitor ultrices. Quisque elementum elit eget nibh tincidunt, at efficitur metus cursus. Etiam ultricies nec arcu at pulvinar. Aliquam vitae arcu lacinia, luctus arcu sollicitudin, interdum libero. Aenean finibus velit metus, sit amet porttitor mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.Etiam sit amet ipsum at metus porttitor cursus id tincidunt arcu. 
                
                Mauris nec eros vel turpis commodo ultricies. Nam sed convallis massa. Cras dolor libero, laoreet et nibh quis, sagittis maximus augue. Morbi mollis tellus justo, sit amet pellentesque nisi porttitor ultrices. Quisque elementum elit eget nibh tincidunt, at efficitur metus cursus. Etiam ultricies nec arcu at pulvinar. Aliquam vitae arcu lacinia, luctus arcu sollicitudin, interdum libero. Aenean finibus velit metus, sit amet porttitor mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.Etiam sit amet ipsum at metus porttitor cursus id tincidunt arcu. Mauris nec eros vel turpis commodo ultricies. Nam sed convallis massa. Cras dolor libero, laoreet et nibh quis, sagittis maximus augue. Morbi mollis tellus justo, sit amet pellentesque nisi porttitor ultrices. Quisque elementum elit eget nibh tincidunt, at efficitur metus cursus. Etiam ultricies nec arcu at pulvinar. Aliquam vitae arcu lacinia, luctus arcu sollicitudin, interdum libero. Aenean finibus velit metus, sit amet porttitor mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. 
                
                
                Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.Etiam sit amet ipsum at metus porttitor cursus id tincidunt arcu. Mauris nec eros vel turpis commodo ultricies. Nam sed convallis massa. Cras dolor libero, laoreet et nibh quis, sagittis maximus augue. Morbi mollis tellus justo, sit amet pellentesque nisi porttitor ultrices. Quisque elementum elit eget nibh tincidunt, at efficitur metus cursus. Etiam ultricies nec arcu at pulvinar. Aliquam vitae arcu lacinia, luctus arcu sollicitudin, interdum libero. Aenean finibus velit metus, sit amet porttitor mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis. mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.Etiam sit amet ipsum at metus porttitor cursus id tincidunt arcu. Mauris nec eros vel turpis commodo ultricies. Nam sed convallis massa. Cras dolor libero, laoreet et nibh quis, sagittis maximus augue. Morbi mollis tellus justo, sit amet pellentesque nisi porttitor ultrices. Quisque elementum elit eget nibh tincidunt, at efficitur metus cursus. Etiam ultricies nec arcu at pulvinar. Aliquam vitae arcu lacinia, luctus arcu sollicitudin, interdum libero. Aenean finibus velit metus, sit amet porttitor mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.Etiam sit amet ipsum at metus porttitor cursus id tincidunt arcu. Mauris nec eros vel turpis commodo ultricies. Nam sed convallis massa. Cras dolor libero, laoreet et nibh quis, sagittis maximus augue. Morbi mollis tellus justo, sit amet pellentesque nisi porttitor ultrices. Quisque elementum elit eget nibh tincidunt, at efficitur metus cursus. Etiam ultricies nec arcu at pulvinar. Aliquam vitae arcu lacinia, luctus arcu sollicitudin, interdum libero. Aenean finibus velit metus, sit amet porttitor mauris bibendum sit amet. Morbi vel ullamcorper diam. Aliquam suscipit lorem ut sem malesuada, in tristique sapien molestie. Aliquam erat volutpat. Curabitur sit amet aliquam urna, a egestas urna. Sed viverra at ante eget ullamcorper. Duis vitae dui pharetra nisi aliquet mollis id a quam. Donec lobortis sit amet magna id facilisis.
            </TableSmallTextDisabled>
        </div>
    )
}