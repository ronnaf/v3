import { gql } from "graphql-request";
import { LandingCopy } from "../../models/landing-details";
import { Project } from "../../models/project";

export interface LandingQueryResponse {
  landing: LandingCopy;
  allProjects: Project[];
}

export const LANDING_QUERY = gql`
  query LandingQuery {
    landing {
      greeting
      title
      subtitle
      iswip
      descriptionlevel1
      descriptionlevel2
      descriptionlevel3
      doodleimage {
        url
      }
    }
    allProjects(orderBy: dateStarted_DESC, first: 100) {
      id
      title
      subtitle
      summary
      description
      thumbnail {
        url
      }
      tags
      links
      isMine
      builtAt
      featured
      projectType
      screenshots {
        url
      }
      urls
    }
    _allProjectsMeta {
      count
    }
  }
`;
