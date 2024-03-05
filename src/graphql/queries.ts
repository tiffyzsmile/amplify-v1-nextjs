/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchNodes = /* GraphQL */ `query SearchNodes(
  $filter: SearchableNodeFilterInput
  $sort: [SearchableNodeSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableNodeAggregationInput]
) {
  searchNodes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchNodesQueryVariables,
  APITypes.SearchNodesQuery
>;
export const searchLines = /* GraphQL */ `query SearchLines(
  $filter: SearchableLineFilterInput
  $sort: [SearchableLineSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableLineAggregationInput]
) {
  searchLines(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      userId
      lineTypeId
      creationMethod
      fromNodeId
      toNodeId
      FromNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      ToNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      activeStatus
      startDate
      endDate
      displayProps {
        name
        meta
        __typename
      }
      relationType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchLinesQueryVariables,
  APITypes.SearchLinesQuery
>;
export const getNode = /* GraphQL */ `query GetNode($id: ID!, $userId: ID!) {
  getNode(id: $id, userId: $userId) {
    id
    userId
    nodeTypeId
    creationMethod
    targetNodeId
    TargetNode {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    IsTargetOfNode {
      items {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    LinesFrom {
      items {
        id
        userId
        lineTypeId
        creationMethod
        fromNodeId
        toNodeId
        FromNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        ToNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        activeStatus
        startDate
        endDate
        displayProps {
          name
          meta
          __typename
        }
        relationType
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    LinesTo {
      items {
        id
        userId
        lineTypeId
        creationMethod
        fromNodeId
        toNodeId
        FromNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        ToNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        activeStatus
        startDate
        endDate
        displayProps {
          name
          meta
          __typename
        }
        relationType
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    activeStatus
    dateTime
    startDate
    endDate
    identifier
    amount
    amountType
    displayProps {
      name
      meta
      __typename
    }
    defaultImageKey
    s3Keys
    name
    descriptiveType
    description
    notes
    emails {
      emailType
      email
      __typename
    }
    addresses {
      addressType
      address {
        streetAddress1
        streetAddress2
        city
        state
        zipCode
        country
        __typename
      }
      __typename
    }
    phones {
      phoneType
      phone
      __typename
    }
    urls {
      urlType
      url
      __typename
    }
    birthdate
    firstName
    middleName
    lastName
    jobTitle
    frontImageS3Key
    backImageS3Key
    year
    make
    model
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetNodeQueryVariables, APITypes.GetNodeQuery>;
export const listNodes = /* GraphQL */ `query ListNodes(
  $id: ID
  $userId: ModelIDKeyConditionInput
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listNodes(
    id: $id
    userId: $userId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNodesQueryVariables, APITypes.ListNodesQuery>;
export const getLine = /* GraphQL */ `query GetLine($id: ID!, $userId: ID!) {
  getLine(id: $id, userId: $userId) {
    id
    userId
    lineTypeId
    creationMethod
    fromNodeId
    toNodeId
    FromNode {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    ToNode {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    activeStatus
    startDate
    endDate
    displayProps {
      name
      meta
      __typename
    }
    relationType
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLineQueryVariables, APITypes.GetLineQuery>;
export const listLines = /* GraphQL */ `query ListLines(
  $id: ID
  $userId: ModelIDKeyConditionInput
  $filter: ModelLineFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLines(
    id: $id
    userId: $userId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      lineTypeId
      creationMethod
      fromNodeId
      toNodeId
      FromNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      ToNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      activeStatus
      startDate
      endDate
      displayProps {
        name
        meta
        __typename
      }
      relationType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLinesQueryVariables, APITypes.ListLinesQuery>;
export const getView = /* GraphQL */ `query GetView($id: ID!, $userId: ID!) {
  getView(id: $id, userId: $userId) {
    id
    userId
    viewTypeId
    targetNodeId
    TargetNode {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    displayProps {
      name
      meta
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetViewQueryVariables, APITypes.GetViewQuery>;
export const listViews = /* GraphQL */ `query ListViews(
  $id: ID
  $userId: ModelIDKeyConditionInput
  $filter: ModelViewFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listViews(
    id: $id
    userId: $userId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      viewTypeId
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      displayProps {
        name
        meta
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListViewsQueryVariables, APITypes.ListViewsQuery>;
export const getFeedEvent = /* GraphQL */ `query GetFeedEvent($id: ID!) {
  getFeedEvent(id: $id) {
    id
    userId
    sourceNodeId
    createdAt
    eventType
    title
    description
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeedEventQueryVariables,
  APITypes.GetFeedEventQuery
>;
export const listFeedEvents = /* GraphQL */ `query ListFeedEvents(
  $filter: ModelFeedEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      sourceNodeId
      createdAt
      eventType
      title
      description
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedEventsQueryVariables,
  APITypes.ListFeedEventsQuery
>;
export const nodesByUserId = /* GraphQL */ `query NodesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  nodesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NodesByUserIdQueryVariables,
  APITypes.NodesByUserIdQuery
>;
export const nodesByNodeTypeId = /* GraphQL */ `query NodesByNodeTypeId(
  $nodeTypeId: NodeTypeIdType!
  $sortDirection: ModelSortDirection
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  nodesByNodeTypeId(
    nodeTypeId: $nodeTypeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NodesByNodeTypeIdQueryVariables,
  APITypes.NodesByNodeTypeIdQuery
>;
export const nodesByTargetNodeId = /* GraphQL */ `query NodesByTargetNodeId(
  $targetNodeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  nodesByTargetNodeId(
    targetNodeId: $targetNodeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      nodeTypeId
      creationMethod
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      IsTargetOfNode {
        items {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesFrom {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      LinesTo {
        items {
          id
          userId
          lineTypeId
          creationMethod
          fromNodeId
          toNodeId
          FromNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          ToNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          activeStatus
          startDate
          endDate
          displayProps {
            name
            meta
            __typename
          }
          relationType
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      activeStatus
      dateTime
      startDate
      endDate
      identifier
      amount
      amountType
      displayProps {
        name
        meta
        __typename
      }
      defaultImageKey
      s3Keys
      name
      descriptiveType
      description
      notes
      emails {
        emailType
        email
        __typename
      }
      addresses {
        addressType
        address {
          streetAddress1
          streetAddress2
          city
          state
          zipCode
          country
          __typename
        }
        __typename
      }
      phones {
        phoneType
        phone
        __typename
      }
      urls {
        urlType
        url
        __typename
      }
      birthdate
      firstName
      middleName
      lastName
      jobTitle
      frontImageS3Key
      backImageS3Key
      year
      make
      model
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NodesByTargetNodeIdQueryVariables,
  APITypes.NodesByTargetNodeIdQuery
>;
export const linesByUserId = /* GraphQL */ `query LinesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLineFilterInput
  $limit: Int
  $nextToken: String
) {
  linesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      lineTypeId
      creationMethod
      fromNodeId
      toNodeId
      FromNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      ToNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      activeStatus
      startDate
      endDate
      displayProps {
        name
        meta
        __typename
      }
      relationType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LinesByUserIdQueryVariables,
  APITypes.LinesByUserIdQuery
>;
export const linesByLineTypeId = /* GraphQL */ `query LinesByLineTypeId(
  $lineTypeId: LineTypeIdType!
  $sortDirection: ModelSortDirection
  $filter: ModelLineFilterInput
  $limit: Int
  $nextToken: String
) {
  linesByLineTypeId(
    lineTypeId: $lineTypeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      lineTypeId
      creationMethod
      fromNodeId
      toNodeId
      FromNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      ToNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      activeStatus
      startDate
      endDate
      displayProps {
        name
        meta
        __typename
      }
      relationType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LinesByLineTypeIdQueryVariables,
  APITypes.LinesByLineTypeIdQuery
>;
export const linesByFromNodeId = /* GraphQL */ `query LinesByFromNodeId(
  $fromNodeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLineFilterInput
  $limit: Int
  $nextToken: String
) {
  linesByFromNodeId(
    fromNodeId: $fromNodeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      lineTypeId
      creationMethod
      fromNodeId
      toNodeId
      FromNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      ToNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      activeStatus
      startDate
      endDate
      displayProps {
        name
        meta
        __typename
      }
      relationType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LinesByFromNodeIdQueryVariables,
  APITypes.LinesByFromNodeIdQuery
>;
export const linesByToNodeId = /* GraphQL */ `query LinesByToNodeId(
  $toNodeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLineFilterInput
  $limit: Int
  $nextToken: String
) {
  linesByToNodeId(
    toNodeId: $toNodeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      lineTypeId
      creationMethod
      fromNodeId
      toNodeId
      FromNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      ToNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      activeStatus
      startDate
      endDate
      displayProps {
        name
        meta
        __typename
      }
      relationType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LinesByToNodeIdQueryVariables,
  APITypes.LinesByToNodeIdQuery
>;
export const viewsByUserId = /* GraphQL */ `query ViewsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViewFilterInput
  $limit: Int
  $nextToken: String
) {
  viewsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      viewTypeId
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      displayProps {
        name
        meta
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewsByUserIdQueryVariables,
  APITypes.ViewsByUserIdQuery
>;
export const viewsByViewTypeId = /* GraphQL */ `query ViewsByViewTypeId(
  $viewTypeId: ViewTypeIdType!
  $sortDirection: ModelSortDirection
  $filter: ModelViewFilterInput
  $limit: Int
  $nextToken: String
) {
  viewsByViewTypeId(
    viewTypeId: $viewTypeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      viewTypeId
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      displayProps {
        name
        meta
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewsByViewTypeIdQueryVariables,
  APITypes.ViewsByViewTypeIdQuery
>;
export const viewsByTargetNodeId = /* GraphQL */ `query ViewsByTargetNodeId(
  $targetNodeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViewFilterInput
  $limit: Int
  $nextToken: String
) {
  viewsByTargetNodeId(
    targetNodeId: $targetNodeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      viewTypeId
      targetNodeId
      TargetNode {
        id
        userId
        nodeTypeId
        creationMethod
        targetNodeId
        TargetNode {
          id
          userId
          nodeTypeId
          creationMethod
          targetNodeId
          TargetNode {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          IsTargetOfNode {
            nextToken
            __typename
          }
          LinesFrom {
            nextToken
            __typename
          }
          LinesTo {
            nextToken
            __typename
          }
          activeStatus
          dateTime
          startDate
          endDate
          identifier
          amount
          amountType
          displayProps {
            name
            meta
            __typename
          }
          defaultImageKey
          s3Keys
          name
          descriptiveType
          description
          notes
          emails {
            emailType
            email
            __typename
          }
          addresses {
            addressType
            __typename
          }
          phones {
            phoneType
            phone
            __typename
          }
          urls {
            urlType
            url
            __typename
          }
          birthdate
          firstName
          middleName
          lastName
          jobTitle
          frontImageS3Key
          backImageS3Key
          year
          make
          model
          createdAt
          updatedAt
          owner
          __typename
        }
        IsTargetOfNode {
          items {
            id
            userId
            nodeTypeId
            creationMethod
            targetNodeId
            activeStatus
            dateTime
            startDate
            endDate
            identifier
            amount
            amountType
            defaultImageKey
            s3Keys
            name
            descriptiveType
            description
            notes
            birthdate
            firstName
            middleName
            lastName
            jobTitle
            frontImageS3Key
            backImageS3Key
            year
            make
            model
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesFrom {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        LinesTo {
          items {
            id
            userId
            lineTypeId
            creationMethod
            fromNodeId
            toNodeId
            activeStatus
            startDate
            endDate
            relationType
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        activeStatus
        dateTime
        startDate
        endDate
        identifier
        amount
        amountType
        displayProps {
          name
          meta
          __typename
        }
        defaultImageKey
        s3Keys
        name
        descriptiveType
        description
        notes
        emails {
          emailType
          email
          __typename
        }
        addresses {
          addressType
          address {
            streetAddress1
            streetAddress2
            city
            state
            zipCode
            country
            __typename
          }
          __typename
        }
        phones {
          phoneType
          phone
          __typename
        }
        urls {
          urlType
          url
          __typename
        }
        birthdate
        firstName
        middleName
        lastName
        jobTitle
        frontImageS3Key
        backImageS3Key
        year
        make
        model
        createdAt
        updatedAt
        owner
        __typename
      }
      displayProps {
        name
        meta
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewsByTargetNodeIdQueryVariables,
  APITypes.ViewsByTargetNodeIdQuery
>;
export const feedEventsByUserId = /* GraphQL */ `query FeedEventsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFeedEventFilterInput
  $limit: Int
  $nextToken: String
) {
  feedEventsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      sourceNodeId
      createdAt
      eventType
      title
      description
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FeedEventsByUserIdQueryVariables,
  APITypes.FeedEventsByUserIdQuery
>;
export const feedEventsByDate = /* GraphQL */ `query FeedEventsByDate(
  $sourceNodeId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFeedEventFilterInput
  $limit: Int
  $nextToken: String
) {
  feedEventsByDate(
    sourceNodeId: $sourceNodeId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      sourceNodeId
      createdAt
      eventType
      title
      description
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FeedEventsByDateQueryVariables,
  APITypes.FeedEventsByDateQuery
>;
