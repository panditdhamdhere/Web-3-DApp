// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

event CampaignCreated(
    string title,
    uint requiredAmount,
    address indexed owner,
    address campaignAddress,
    string imgURI,
    uint indexed timestamp,
    string indexed category
);
    function createCampaign(
        string memory campaignTitle,
        uint256 requiredCampaignAmount,
        string memory imgURI,
        string memory category,
        string memory storyURI
    ) public {
        Campaign newCampaign = new Campaign(
            campaignTitle,
            requiredCampaignAmount,
            imgURI,
            storyURI
        );

        deployedCampaigns.push(address(newCampaign));

        emit CampaignCreated(
            campaignTitle,
            requiredCampaignAmount,
            msg.sender,
            address(newCampaign),
            imgURI,
            block.timestamp,
            category
        );
    }
}

contract Campaign {
    string public title;
    uint256 public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint256 public recievedAmount;

    event donated(
        address indexed donar,
        uint256 indexed amount,
        uint256 indexed timestamp
    );

    constructor(
        string memory campaignTitle,
        uint256 requiredCampaignAmount,
        string memory imgURI,
        string memory storyURI
    ) {
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = imgURI;
        story = storyURI;
        owner = payable(msg.sender);
    }

    function donate() public payable {
        require(requiredAmount > recievedAmount, "required amount fulfilled");
        owner.transfer(msg.value);
        recievedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}

